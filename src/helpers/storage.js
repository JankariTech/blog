import {
  DEFAULT_FONT,
  DEFAULT_HOME_VIEW_MODE,
  DEFAULT_THEME,
  FONT_MAP,
  HOME_VIEW_MODES,
  THEME_ARRAY
} from "./constants"

export class Storage {
  static saveTheme (theme) {
    if (THEME_ARRAY.includes(theme)) {
      localStorage.setItem("theme", theme)
    } else {
      console.error("Invalid theme is provided.")
      localStorage.setItem("theme", Storage.getTheme())
    }
  }

  static getTheme () {
    return localStorage.getItem("theme") || DEFAULT_THEME
  }

  static saveFont (font) {
    if (FONT_MAP.map(font => font.name).includes(font)) {
      localStorage.setItem("font", font)
    } else {
      console.error("Invalid font is provided.")
      localStorage.setItem("font", Storage.getFont())
    }
  }

  static getFont () {
    return localStorage.getItem("font") || DEFAULT_FONT
  }

  static saveHomeViewMode (mode) {
    if (HOME_VIEW_MODES.includes(mode)) {
      localStorage.setItem("home-view-mode", mode)
    } else {
      console.error("Invalid home view mode is provided.")
      localStorage.setItem("home-view-mode", Storage.getHomeViewMode())
    }
  }

  static getHomeViewMode () {
    return localStorage.getItem("home-view-mode") || DEFAULT_HOME_VIEW_MODE
  }
}
