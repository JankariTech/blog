<template>
  <div class="blog-content-sidebar">
    <div class="toc sharp-border">Table of content</div>
    <div v-for="(item, index) in toc"
      :key="index"
      class="sidebar--item"
      :class="`heading-${item.depth}`"
      @click="scrollToHeading(item.text, item.depth)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue"

defineProps({
  toc: {
    type: Array,
    required: true
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
  padding: 1rem;
  border: 1px solid grey;
  overflow-y: auto;

  .toc {
    font-size: 1.4rem;
    font-weight: 300;
    width: fit-content;
    margin-bottom: 1rem;
    padding-block: 0.4rem;
    border-bottom: 1px solid grey;
  }

  .heading-1 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .heading-2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .heading-3 {
    font-size: 1rem;
    font-weight: 400;
  }

  .heading-4 {
    font-weight: 400;
  }

  .heading-5 {
    font-size: 0.875rem;
    font-weight: 300;
  }

  .heading-6 {
    font-size: 0.5rem;
    font-weight: 300;
  }

  .heading-1,
  .heading-2,
  .heading-3,
  .heading-4,
  .heading-5,
  .heading-6 {
    color: #414141;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  .sidebar {
    &--item:not(:last-child) {
      padding-bottom: 1rem;
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
