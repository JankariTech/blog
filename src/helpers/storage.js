import { DEFAULT_FONT, DEFAULT_THEME, FONT_MAP, THEME_ARRAY } from "./constants"

export class Storage {
  static saveTheme (theme) {
    if (THEME_ARRAY.includes(theme)) {
      localStorage.setItem("theme", theme)
    } else {
      console.error("Invalid theme is provided.")
      // fallback to default theme
      localStorage.setItem("theme", DEFAULT_THEME)
    }
  }

  static getTheme () {
    return localStorage.getItem("theme") || "light"
  }

  static saveFont (font) {
    if (FONT_MAP.map(font => font.name).includes(font)) {
      localStorage.setItem("font", font)
    } else {
      console.error("Invalid font is provided.")
      // fallback to default font
      localStorage.setItem("font", DEFAULT_FONT)
    }
  }

  static getFont () {
    return localStorage.getItem("font") || DEFAULT_FONT
  }
}
