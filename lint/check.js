const fs = require("fs")
const marked = require("marked")
const log = require("./log")
const yaml = require("js-yaml")

const assetDir = fs.readdirSync("src/assets", { withFileTypes: true })

const markdownFiles = {}

let success = true

assetDir.forEach(item => {
  let ext = item.name.substring(item.name.length - 3)
  if (ext === ".md") {
    markdownFiles[item.name.split(".md")[0]] = fs.readFileSync(`./src/assets/${item.name}`, {
      encoding: "utf-8",
      flag: "r"
    })
  } else {
    // search for another level, in case of md files inside folders
    const filesBeneath = fs.readdirSync(`./src/assets/${item.name}`, { withFileTypes: true })
    filesBeneath.forEach(f => {
      ext = f.name.substring(f.name.length - 3)
      if (ext === ".md") {
        markdownFiles[f.name.split(".md")[0]] = fs.readFileSync(`./src/assets/${item.name}/${f.name}`, {
          encoding: "utf-8",
          flag: "r"
        })
      }
    })
  }
})

const requiredMeta = [
  "title",
  "authorName",
  "authorAvatar",
  "authorLink",
  "createdAt",
  "tags",
  "banner"
]

const optionalMeta = [
  "seriesTitle",
  "episode"
]

const extractMeta = (rawMarkdown) => {
  const lexer = marked.lexer(rawMarkdown, { sanitize: true })
  const metaLexer = lexer.slice(1, 2)[0].text
  return yaml.load(metaLexer)
}

// check the meta information in the markdown files
// must have 7 or 9 lines
// required fields: title, author*, createdAt
// if series, episode is required
log.info("Checking meta...")
log.info("-------------------------------------")

function lintMeta (key) {
  const peekData = extractMeta(markdownFiles[key])
  // check if every meta is valid
  Object.keys(peekData).forEach((meta) => {
    if (!requiredMeta.includes(meta) && !optionalMeta.includes(meta)) {
      log.error(`Invalid meta: ${meta} in ${key}`)
      success = false
    }
  })

  // check for every required meta inside the peek data
  requiredMeta.forEach((meta) => {
    if (!peekData[meta]) {
      log.error(`Missing required meta: ${meta} in ${key}`)
      success = false
    }
  })

  // check if the createdAt is set with proper format
  if (peekData.createdAt) {
    const regex = /[A-Za-z]+\s\d{1,2},\s\d{4}/g

    if (!regex.test(peekData.createdAt)) {
      log.error(`Invalid date format in ${key}`)
      success = false
    }
  }

  // check if series has episodes
  if (peekData.seriesTitle && !peekData.episode) {
    log.error(`Missing episode number in ${key}`)
    success = false
  }

  // check if episode has series
  if (peekData.episode && !peekData.seriesTitle) {
    log.error(`Missing series title in ${key}`)
    success = false
  }
  if (peekData.banner) {
    // url validation
    try {
      // eslint-disable-next-line no-new
      new URL(peekData.banner)
    } catch (err) {
      log.error(`Invalid banner url in ${key}. Found: ${peekData.banner}`)
      success = false
    }
  }
}

for (let i = 0; i < Object.keys(markdownFiles).length; i++) {
  const key = Object.keys(markdownFiles)[i]
  const mTokens = marked.lexer(markdownFiles[key], { sanitize: true })

  lintMeta(key)

  // must have 1 line hr, 2nd line paragraph and 3rd line hr
  if (mTokens.length < 3) {
    log.error(`${key} has less than 3 lines`)
    continue
  }

  if (mTokens[0].type !== "hr" && mTokens[1].type !== "paragraph" && mTokens[2].type !== "hr") {
    log.error(`${key} has no meta information at the top.`)
    success = false
  }
}
log.info("-------------------------------------")

// no use of 1st heading tag inside the content (reserved for the blog title)
log.info("Checking first heading tag inside content...")
log.info("-------------------------------------")
Object.keys(markdownFiles).forEach((item) => {
  const tokens = marked.lexer(markdownFiles[item])
  for (let i = 3; i < tokens.length; i++) {
    if (tokens[i].type === "heading" && tokens[i].depth === 1) {
      success = false
      log.error(`${item} has a first heading tag inside the content`)
    }
  }
})
log.info("-------------------------------------")

// check for dead image links
// no http urls allowed
// relative urls must pass the regex: /\/src\/assets\/.+\.(jpg|png|gif|svg)/
// relative urls must exist inside the src/assets folder
log.info("Checking for dead image links...")
log.info("-------------------------------------")
Object.keys(markdownFiles).forEach((item) => {
  const srcRegex = /\/src\/assets\/.+\.(jpg|png|gif|svg)/
  const tokens = marked.lexer(markdownFiles[item])
  for (let i = 3; i < tokens.length; i++) {
    if (tokens[i].type === "paragraph" && tokens[i].tokens) {
      for (let j = 0; j < tokens[i].tokens.length; j++) {
        const token = tokens[i].tokens[j]
        if (token.type === "image") {
          if (token.href.startsWith("https://")) {
            // this is ok
            continue
          }
          if (token.href.startsWith("http://")) {
            success = false
            log.error(`${item} has an image link with HTTP (insecure): ${token.href}`)
            continue
          }
          if (!srcRegex.test(token.href)) {
            success = false
            log.error(`${item} has a dead image link: ${token.href}`)
            continue
          } else {
            // check for the existence of the image
            // remove first char from token.href
            const imagePath = token.href.substring(1)
            if (!fs.existsSync(imagePath)) {
              success = false
              log.error(`${item} has a non-existing image link: ${token.href}`)
            }
          }
        }
      }
    }
  }
})
log.info("-------------------------------------")

// if any of the console.error is called, the script will exit with error
if (success) {
  log.success("All checks passed!")
  log.success("You can now publish the blog!")
} else {
  log.info("Markdown lint failed!")
  log.info("Please check the errors above and fix them.")
  process.exit(1)
}
