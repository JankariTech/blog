<template>
  <div class="blog-content-sidebar">
    <div class="toc">
      <div class="title sharp-border">Table of content</div>
      <TOC :toc='toc' :hidden="false"/>
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
import TOC from "./TOC.vue"

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

</script>
<style lang="scss">
.blog-content-sidebar {
  flex: 20%;
  padding: 0.5rem;

  @media only screen and (min-width: 960px) {
    position: sticky;
    top: calc(var(--appbar-height) + 20px);
  }

  @media only screen and (max-width: 960px) {
    flex: 100%;
    // margin-inline: auto;
    margin-bottom: 2rem;
  }

  height: fit-content;
  overflow-y: auto;

  .title {
    font-size: 1.6rem;
    font-weight: 400;
    width: fit-content;
    margin-top: -1rem;
    margin-bottom: 1rem;
    padding-block: 0.4rem;
    border-bottom: 1px solid grey;
    color: var(--jankaritech);
  }

  .toc {
    &--item {
      color: #414141;
      text-transform: capitalize;
      cursor: pointer;
      font-weight: 300;
      // margin-left: .1rem;

      display: flex;
      align-items: center;

      svg {
        margin-right: 0.4rem;
        font-size: 1.2rem;
      }

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
    gap: 0.5rem;

    .tag {
      display: flex;
      align-items: center;
      font-size: 1rem;
      width: fit-content;
      color: #6ea51c;

      svg {
        margin-right: 0.2rem;
        font-size: 12px;
      }

      border: 1px solid grey;
      padding: 0.5rem;
    }
  }
}

body[theme-dark] {
  .blog-content-sidebar {
    .toc {
      &--item {
        color: #cacaca;

        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>
