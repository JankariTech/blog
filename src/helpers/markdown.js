import { marked } from "marked"
import useMarkdown from "@/composables/markdown"

marked.setOptions({
  sanitize: true,
  headerIds: true
})

export const getFileName = (sourcePath) => {
  return sourcePath.split("/src/assets/").at(-1).split(".md")[0]
}

export const getHref = (sourcePath) => {
  return `/blog/${getFileName(sourcePath)}`
}

export const readAssets = () => {
  const fileModules = import.meta.glob(
    "/src/assets/**/*.md",
    { as: "raw" }
  )
  return {
    fileModules
  }
}

export const getPeekInfoForModules = (modules) => {
  const peekInfo = []
  Object.keys(modules).forEach((key) => {
    const module = modules[key]
    peekInfo.push({
      raw: module,
      sourcePath: key,
      meta: getPeekDataFor(key, modules)
    })
  })
  return peekInfo
}

export const extractMeta = (lexer) => {
  const metaDetails = {}
  const metaLexer = lexer.slice(1, 2)[0].text?.split("\n")?.map(line => line.split(": "))

  // TODO: enhance the parsing with the key name
  metaDetails.title = metaLexer[0][1] // first line in meta
  metaDetails.authorName = metaLexer[1][1] // second line in meta
  metaDetails.authorAvatar = metaLexer[2][1] // third line in meta
  metaDetails.authorLink = metaLexer[3][1] // fourth line in meta

  const createdAt = metaLexer[4][1] // fifth line in meta
  metaDetails.createdAt = createdAt ? new Date(createdAt) : "-"

  metaDetails.tags = metaLexer[5][1].split(", ") // sixth line in meta
  metaDetails.banner = metaLexer[6][1] // seventh line in meta

  if (metaLexer.length === 9) {
    metaDetails.seriesTitle = metaLexer[7][1] // eighth line in meta
    metaDetails.episode = metaLexer[8][1] // ninth line in meta
  }

  return metaDetails
}

export const getPeekDataFor = (sourcePath, modules) => {
  const lexer = marked.lexer(modules[sourcePath], { sanitize: true })

  const metaInformation = extractMeta(lexer)

  const contentLength = modules[sourcePath].length

  return { ...metaInformation, contentLength, sourcePath }
}

export const getPeekData = () => {
  const peekData = []
  const { modules } = useMarkdown()

  modules.value.forEach(module => {
    peekData.push(module.meta)
  })
  return peekData
}

export const getContentHtml = (source) => {
  const tokens = marked.lexer(source)
  return marked.parser(tokens.slice(3))
}

export const getTableOfContent = (source) => {
  const tokens = marked.lexer(source)
  // return all heading tokens
  return tokens.filter(token => token.type === "heading")
}
