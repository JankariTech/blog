export class SearchBar {
  #page
  #boxLocator
  #inputLocator
  #clearButtonLocator
  constructor (page) {
    this.#page = page
    this.#boxLocator = this.#page.locator(".home-view--search")
    this.#inputLocator = this.#boxLocator.locator("input")
    this.#clearButtonLocator = this.#boxLocator.locator(".clear-button")
  }

  async makeSearch (searchText) {
    await this.#inputLocator.fill(searchText)
    await this.#page.keyboard.press("Enter")
  }
}
