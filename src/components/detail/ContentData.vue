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
  padding: 0 2rem;

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
  ul {
    margin-bottom: 1rem;
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
}

body[theme-dark] {
  .blog-content-data {
    code {
      color: white;
      background-color: rgb(54 54 54);
    }

    pre {
      background-color: rgb(54 54 54);
    }
  }
}
</style>
