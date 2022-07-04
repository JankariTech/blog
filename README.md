# A Blogging Platform

A beautiful blogging platform for the JankariTech peoples.

## Publish a Blog
1. Create a md file inside `src/assets` folder
2. Add meta information at the top
    ```md
    ---
    title: Unit Testing with VueJS
    authorName: John Doe
    authorAvatar: https://some.link.jpg (must be an image URL)
    authorLink: https://github.com/John
    createdAt: 02/10/2022 (must be in format dd/mm/yyyy)
    tags: vue, jest, unit, testing (separate multiple items with a comma `,` character)
    banner: https://some.link.jpg (must be an image URL)
    seriesTitle: Unit Testing is Fun (if only this post belongs to a series, optional)
    episode: 1 (episode number of the series, optional)
    ---
    ```
3. Wrap meta information with two horizontal lines
4. Add the main content below the last horizontal line
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
   - Missing meta information
   - No use of 1st heading tag (`#`) inside the main content
   - Dead/Insecure image links
6. If these all checks are good, make the PR with a new markdown file as a brand-new blog post.
