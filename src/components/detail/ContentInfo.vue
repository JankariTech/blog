<template>
  <div class="blog-content-info">
    <hr>
    <br>
    <div class="title">The Blog Project</div>
    <br>
    <p class="subtitle">
      amplifies the voices of the open source community: the maintainers, developers,
      and teams whose contributions move the world forward everyday.
    </p>
    <br>
    <div class="wrapper">
      <div class="title">Share</div>
      <div class="share-items">
        <mdi-twitter class="share-icon twitter" />
        <mdi-facebook class="share-icon facebook" />
        <mdi-linkedin class="share-icon linkedin" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog-content-info {
  padding-top: 0.5rem;

  @media only screen and (min-width: 960px) {
    min-width: 200px;
  }

  .wrapper {
    position: sticky;
    top: calc(var(--appbar-height) + 10px);
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
  }

  .subtitle {
    color: rgb(77 76 76);
  }

  .share-items {
    display: flex;

    .share-icon {
      font-size: 2rem;
      margin-block: 1rem;
    }

    .twitter {
      color: rgb(29 155 240);
    }

    .facebook {
      color: rgb(7 122 233);
      margin-inline: 1rem;
    }

    .linkedin {
      color: rgb(10 102 194);
    }
  }
}

body[theme-dark] {
  .blog-content-info {
    .subtitle {
      color: rgb(206 206 206);
    }
  }
}
</style>
