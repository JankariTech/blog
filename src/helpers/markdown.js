import { marked } from "marked"
import useMarkdown from "@/composables/markdown"

export const getFileName = (sourcePath) => {
  return sourcePath.split("/src/assets/").at(-1).split(".md")[0]
}

export const getHref = (sourcePath) => {
  return `/blog/${getFileName(sourcePath)}`
}

export const readAssets = () => {
  const filePaths = []
  const fileModules = import.meta.glob(
    "/src/assets/**/*.md",
    { as: "raw" }
  )

  for (const path in fileModules) {
    filePaths.push(path)
  }

  return {
    filePaths,
    fileModules
  }
}

export const getPeekDataFor = (sourcePath) => {
  const { modules } = useMarkdown()
  const tokens = marked.lexer(modules.value[sourcePath])

  const metaDetails = tokens.slice(1, 2)[0].text?.split("\n")?.map(line => line.split(": "))
  const title = metaDetails[0][1] // first line in meta
  const authorName = metaDetails[1][1] // second line in meta
  const authorAvatar = metaDetails[2][1] // third line in meta
  const authorLink = metaDetails[3][1] // fourth line in meta

  let createdAt = metaDetails[4][1] // fifth line in meta
  createdAt = createdAt ? new Date(createdAt) : "-"

  const tags = metaDetails[5][1].split(", ") // sixth line in meta
  const banner = metaDetails[6][1] // seventh line in meta

  const contentLength = modules.value[sourcePath].length

  const metaInformation = {
    title, contentLength, authorName, authorAvatar, authorLink, createdAt, tags, banner, sourcePath
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

export const getPeekData = () => {
  const peekData = []
  const { list } = useMarkdown()

  list.value.forEach(sourcePath => {
    peekData.push(getPeekDataFor(sourcePath))
  })
  return peekData
}

export const prepareSidebarList = () => {
  const sidebarList = {}
  const peekData = getPeekData()
  for (let i = 0; i < peekData.length; i++) {
    const item = peekData[i]
    if (item.seriesTitle) {
      if (!Object.hasOwn(sidebarList, item.seriesTitle)) {
        sidebarList[item.seriesTitle] = {}
      }
      sidebarList[item.seriesTitle][item.title] = item.sourcePath
    } else {
      sidebarList[item.title] = item.sourcePath
    }
  }
  return sidebarList
}

export const getContentHtml = (sourcePath) => {
  const { modules } = useMarkdown()
  const tokens = marked.lexer(modules.value[sourcePath])
  return marked.parser(tokens.slice(3))
}

export const getTableOfContent = (sourcePath) => {
  const { modules } = useMarkdown()
  const tokens = marked.lexer(modules.value[sourcePath])
  // get all heading tokens
  return tokens.filter(token => token.type === "heading")
}
