import { marked } from "marked"
import useMarkdown from "@/composables/markdown"
import hljs from "highlight.js"
import yaml from "js-yaml"

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
  const metaLexer = lexer.slice(1, 2)[0].text
  const metaDetails = yaml.load(metaLexer)
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
  // remove the first 2 tokens to avoid meta information
  // and then return every tokens beneath the meta token
  const html = marked.parser([tokens[2]])
  const doc = new DOMParser().parseFromString(html, "text/xml")
  return [marked.parser(tokens.slice(2), null), { text: doc.firstChild.textContent }]
}

export const getTableOfContent = (source) => {
  const tokens = marked.lexer(source)
  // remove the first 2 tokens to avoid meta information
  // and then return every tokens that is of header type
  const hg = []
  const headers = tokens
    .slice(2)
    .filter((token) => token.type === "heading")// && token.depth <= 4)
  headers.forEach((header) => {
    const html = marked.parser([header])
    const doc = new DOMParser().parseFromString(html, "text/xml")
    header.id = doc.firstChild.id
    header.text = doc.firstChild.textContent
    hg.push(new Graph(header.depth, header.text, header.id, null))
  })
  const stack = [hg[0]]
  const ans = []
  hg.forEach((h) => {
    if (h.val === stack[0].val) {
      ans.push(h)
      stack.push(h)
    } else if (h.val > stack[stack.length - 1].val) {
      stack[stack.length - 1].addNode(h)
      stack.push(h)
    } else if (h.val < stack[stack.length - 1].val) {
      while (!(h.val > stack[stack.length - 1].val)) {
        stack.splice(stack.length - 1, 1)
      }
      stack[stack.length - 1].addNode(h)
      stack.push(h)
    } else {
      stack.splice(stack.length - 1, 1)
      stack[stack.length - 1].addNode(h)
      stack.push(h)
    }
  })
  return ans
}

class Graph {
  constructor (val, title, id) {
    this.val = val
    this.title = title
    this.id = id
    this.node = []
  }

  addNode (node) {
    this.node.push(node)
  }
}
