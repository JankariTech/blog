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
    text-align: justify;
    text-justify: inter-word;
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
    margin-bottom: 1.8rem;
    color: var(--text-light);
  }

  p,
  ul,
  ol,
  blockquote {
    letter-spacing: 0.3px;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  li {
    margin-bottom: 0.4rem;
    margin-left: 1rem;
  }

  code {
    width: 100% !important;
    font-size: 0.95rem;
    line-height: 1.3rem;
    background-color: rgb(225 225 225);
    border: 1px solid #bebebe;
    padding-inline: 4px;
    padding-block: 1px;
  }

  pre {
    white-space: pre-wrap;
    background-color: rgb(225 225 225);
    overflow-x: auto;
    padding: 0.7rem 1rem;
    max-height: 400px;
    width: 100%;
    overflow-y: auto;

    code {
      padding: 0;
      margin: 0;
      background-color: transparent;
      border: none;
    }
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

  table {
    border: 1px solid black;

    td,
    th {
      border: 1px solid black;
      border-radius: 0;
      padding: 0.5rem;
    }

    thead,
    tr:nth-child(even) {
      background-color: #e2e0e0b4;
    }
  }
}

body[theme-dark] {
  .blog-content-data {
    code {
      background-color: rgb(42 42 42);
      color: var(--text-dark);
    }

    pre {
      background-color: #111;

      code {
        background-color: transparent;

        * {
          border-radius: 0;
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li {
      color: var(--text-dark);
    }

    table {
      border-color: grey;

      td,
      th {
        border-color: grey;
      }

      thead,
      tr:nth-child(even) {
        background-color: rgb(39 38 38);
      }
    }
  }
}
</style>
