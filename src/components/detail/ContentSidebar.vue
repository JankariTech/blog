<template>
  <div class="blog-content-sidebar">
    <div class="toc">
      <div class="title sharp-border">Table of content</div>
      <div v-for="(item, index) in toc"
        :key="index"
        class="toc--item"
        @click="scrollToHeading(item.text, item.depth)"
      >
        {{ item.text }}
      </div>
    </div>
    <br>
    <div class="title sharp-border">Tags</div>
    <div class="tags">
      <a href="tag"
        v-for="tag in tags"
        :key="tag"
        :title="tag"
        target="_blank"
        class="tag"
      >
        <mdi-hashtag /> {{ tag }}
      </a>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue"

defineProps({
  toc: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const scrollToHeading = (headingText, headingDepth) => {
  const xpath = `//h${headingDepth}[contains(text(), '${headingText.trim()}')]`
  const heading = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
  if (heading) {
    const position = heading.getBoundingClientRect()
    // scrolls to 100px above element
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 100,
      behavior: "smooth"
    })
  }
}
</script>
<style lang="scss">
.blog-content-sidebar {
  flex: 20%;

  @media only screen and (min-width: 960px) {
    position: sticky;
    top: calc(var(--appbar-height) + 20px);
  }
  @media only screen and (max-width: 960px) {
    flex: 100%;
    width: 93%;
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  height: fit-content;
  width: 100%;
  overflow-y: auto;

  .title {
    font-size: 1.4rem;
    font-weight: 300;
    width: fit-content;
    margin-bottom: 1rem;
    padding-block: 0.4rem;
    border-bottom: 1px solid grey;
  }

  .toc {
    &--item {
      color: #414141;
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        color: black;
      }
      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: .5rem;
    .tag {
      display: flex;
      align-items: center;
      font-size: 1rem;
      width: fit-content;
      svg {
        margin-right: .2rem;
      }
      border: 1px solid grey;
      padding: .5rem;
    }
  }
}

body[theme-dark] {
  .blog-content-sidebar {
    .heading-1,
    .heading-2,
    .heading-3,
    .heading-4,
    .heading-5,
    .heading-6 {
      color: #cacaca;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
