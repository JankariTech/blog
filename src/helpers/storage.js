import { FONT_MAP } from "./constants"

export class Storage {
  static saveTheme (theme) {
    if (["light", "dark"].includes(theme)) {
      localStorage.setItem("theme", theme)
    } else {
      console.error("Invalid theme")
    }
  }

  static getTheme () {
    return localStorage.getItem("theme") || "light"
  }

  static saveFont (font) {
    if (FONT_MAP.map(font => font.name).includes(font)) {
      localStorage.setItem("font", font)
    } else {
      console.error("Invalid font")
    }
  }

  static getFont () {
    return localStorage.getItem("font") || "Lato"
  }
}
