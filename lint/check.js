const fs = require("fs")
const marked = require("marked")
const log = require("./log")

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

const getPeekDataFor = (rawMarkdown) => {
  const tokens = marked.lexer(rawMarkdown)

  const metaDetails = tokens.slice(1, 2)[0].text?.split("\n")?.map(line => line.split(": "))

  // TODO: enhance parsing with the key name in each line
  const title = metaDetails[0][1] // first line in meta
  const authorName = metaDetails[1][1] // second line in meta
  const authorAvatar = metaDetails[2][1] // third line in meta
  const authorLink = metaDetails[3][1] // fourth line in meta

  let createdAt = metaDetails[4][1] // fifth line in meta
  createdAt = createdAt ? new Date(createdAt) : "-"

  const tags = metaDetails[5][1].split(", ") // sixth line in meta
  const banner = metaDetails[6][1] // seventh line in meta

  const metaInformation = {
    title,
    authorName,
    authorAvatar,
    authorLink,
    createdAt,
    tags,
    banner
  }
  if (metaDetails.length === 9) {
    const seriesTitle = metaDetails[7][1] // eight line in meta
    const episode = metaDetails[8][1] // ninth line in meta
    return {
      ...metaInformation,
      seriesTitle,
      episode
    }
  }
  return metaInformation
}

// check the meta informations in the markdown files
// must have 7 or 9 lines
// required fields: title, author*, createdAt
// if series, episode is required
log.info("Checking meta...")
log.info("-------------------------------------")

for (let i = 0; i < Object.keys(markdownFiles).length; i++) {
  const key = Object.keys(markdownFiles)[i]
  const mTokens = marked.lexer(markdownFiles[key])

  // must have 1 line hr, 2nd line paragraph and 3rd line hr
  if (mTokens.length < 3) {
    log.error(`${key} has less than 3 lines`)
    continue
  }

  if (mTokens[0].type !== "hr" && mTokens[1].type !== "paragraph" && mTokens[2].type !== "hr") {
    log.error(`${key} has no meta information at the top.`)
    continue
  }

  // must have 7 or 9 lines inside meta information
  const metaPart = mTokens[1].text.split("\n")

  if (metaPart.length !== 7 && metaPart.length !== 9) {
    log.error(`${key} has incomplete meta information`)
    success = false
    continue
  }

  const peekData = getPeekDataFor(markdownFiles[key])

  if (!peekData.title) {
    success = false
    log.error(`${key} has no "title" meta`)
  }
  if (!peekData.authorName) {
    success = false
    log.error(`${key} has no "authorName" meta`)
  }
  if (!peekData.createdAt) {
    success = false
    log.error(`${key} has no "createdAt" meta`)
  }
  if (peekData.seriesTitle && !peekData.episode) {
    success = false
    log.error(`${key} has no "episode" meta`)
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
