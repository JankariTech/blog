<template>
  <div class="blog-content-data" v-html="data" />
</template>
<script setup>
import { defineProps } from "vue"

defineProps({
  data: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss">
.blog-content-data {
  flex: 65%;
  padding: 0 0.5rem;

  @media only screen and (max-width: 768px) {
    flex: 100%;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  ul,
  ol {
    margin-bottom: 1rem;
    color: var(--text-light);
  }

  li {
    margin-bottom: 0.4rem;
    margin-left: 1rem;
  }

  code {
    width: 100% !important;
    font-size: 0.875rem;
    line-height: 1.3rem;
    background-color: rgb(225 225 225);
    padding: 4px;
  }

  pre {
    white-space: pre-wrap;
    background-color: rgb(225 225 225);
    overflow-x: auto;
    padding: 1rem;
    max-height: 400px;
    width: 100%;
    overflow-y: auto;
  }

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: clamp(1.6rem, 6vw, 2.6rem);
    line-height: 2.6rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  h3 {
    font-size: clamp(1.4rem, 6vw, 2.2rem);
    line-height: 2.2rem;
    font-weight: 500;
    margin-top: 1.6rem;
  }

  h4 {
    font-size: clamp(1.2rem, 6vw, 2rem);
    line-height: 2rem;
    font-weight: 500;
    margin-top: 1.4rem;
  }

  h5 {
    font-size: clamp(1rem, 6vw, 1.6rem);
    line-height: 1.6rem;
    font-weight: 500;
    margin-top: 1.4rem;
  }

  h6 {
    font-size: clamp(0.875rem, 6vw, 1.2rem);
    line-height: 1.2rem;
    font-weight: 500;
    margin-top: 1.2rem;
  }
}

body[theme-dark] {
  .blog-content-data {
    code {
      background-color: rgb(54 54 54);
    }

    pre {
      background-color: rgb(54 54 54);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    code,
    ul,
    li {
      color: var(--text-dark);
    }
  }
}
</style>
