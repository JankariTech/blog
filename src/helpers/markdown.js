import { marked } from "marked"
import useMarkdown from "@/composables/markdown"
import hljs from "highlight.js"

marked.setOptions({
  sanitize: true,
  headerIds: true,
  langPrefix: "language-",
  highlight: (code, lang) => {
    if (lang) {
      try {
        return hljs.highlight(lang, code).value
      } catch (error) {
        return hljs.highlightAuto(code).value
      }
    } else return hljs.highlightAuto(code).value
  }
})

export const readAssets = () => {
  const fileModules = import.meta.glob(
    "/src/assets/**/**.md",
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
  const metaLexer = lexer.slice(1, 2)[0]
    .text?.split("\n")
    ?.map(line => [
      line.substring(0, line.indexOf(": ")),
      line.substring(line.indexOf(": ") + 2)]
    )

  metaLexer?.forEach((line) => {
    metaDetails[line[0]] = line[1]
  })

  const createdAt = metaDetails["createdAt"]
  metaDetails.createdAt = createdAt ? new Date(createdAt) : "-"
  metaDetails.tags = metaDetails.tags ? metaDetails.tags.split(", ") : []

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
  const tokens = marked.lexer(source, null)
  return marked.parser(tokens.slice(3), null)
}

export const getTableOfContent = (source) => {
  const tokens = marked.lexer(source)
  // remove the first 3 tokens to avoid meta information
  // and then return every token that is of header type
  return tokens.slice(3).filter(token => token.type === "heading")
}
