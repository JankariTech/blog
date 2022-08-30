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
  flex: 15%;
  @media only screen and (max-width: 768px) {
    flex: 100%
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
    .facebook {
      margin-inline: 1rem;
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
