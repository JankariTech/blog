# A Blogging Platform

A beautiful blogging platform for the JankariTech peoples.

## Installation

1. Requirements
   - [NodeJS (>16.0.0)](https://nodejs.org/en/download/)
   - [pnpm (>7.0.0)](https://pnpm.io/installation)

2. Install Dependencies
    ```bash
    pnpm install
    ```

3. Serve
    ```bash
    pnpm dev
    ```
   This should start a development server on port 3000.

## Publish a Blog

1. Create a markdown file inside `src/assets` folder
2. Add meta information at the top as shown below
    ```md
    ---
    title: Very Interesting Blog (**required**)
    authorName: John Doe
    authorAvatar: https://some.link.jpg (must be an image URL, **required**)
    authorLink: https://github.com/John
    createdAt: Oct 30, 2019 (must be in the format `MMM dd, yyyy` e.g., `Oct 30, 2019` or `MMMM dd, yyyy` e.g., `October 30, 2019`, **required**)
    updatedAt: Oct 30, 2023 (must be in the format `MMM dd, yyyy` e.g., `Oct 30, 2023` or `MMMM dd, yyyy` e.g., `October 30, 2023`, **optional**)
    tags: vue, jest, unit, testing (separate multiple items with a comma `,` character, **required**)
    banner: https://some.link.jpg (must be an image URL, **required**)
    seriesTitle: Unit Testing is Fun (if only this post belongs to a series, **optional**)
    episode: 1 (episode number of the series, **optional**, required if the seriesTitle is set)
    ---
    ```
3. Wrap **meta** information with two horizontal lines
4. Add the **main** content below the last horizontal line from the **meta** block
    ```md
    ---
    meta information...
    ---
    # heading 1
    some content
    # heading 2
    other content

    ```
5. Check for your markdown files compatibility with the blog site
    ```shell
    pnpm markdown:lint
    ```
   This will check the markdown files inside `src/assets` folder for the following:
   - Missing **meta** information
   - Usage of the first heading tag (`#`) inside the **main** content
   - Usage of dead or insecure image links
6. If these all checks are good, make a PR with a new markdown file as a brand-new blog post.
