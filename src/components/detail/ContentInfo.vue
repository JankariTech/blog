<template>
  <div class="blog-content-info">
    <hr><br>
    <div class="title">The Blog Project</div>
    <br>
    <p class="subtitle">
      Amplifies the voices of the open source community: the maintainers, developers,
      and teams whose contributions move the world forward everyday.
    </p>
    <br><br>
    <div class="wrapper">
      <div class="title">Share</div>
      <div class="share-items">
        <mdi-twitter class="share-icon twitter" @click="shareOnTwitter"/>
        <mdi-facebook class="share-icon facebook" @click="shareOnFb" />
        <mdi-linkedin class="share-icon linkedin" />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["title"])
const shareOnFb = () => {
  // eslint-disable-next-line no-undef
  FB.ui({
    display: "popup",
    method: "share",
    href: window.location.href,
    redirect_uri: window.location.href
  }, function (response) {})
}
const shareOnTwitter = () => {
  window
    .open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${props.title.title}" by ${props.title.authorName} #JankariTech`
      )}&url=${encodeURIComponent(encodeURI(window.location.href))}`,
      "_blank"
    )
    .focus()
}
</script>
<style lang="scss">
.blog-content-info {
  flex: 15%;
  padding-top: 0.6rem;

  .wrapper {
    position: sticky;
    top: calc(var(--appbar-height) + 30px);
  }

  .title {
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0;
    width: fit-content;
    padding-bottom: 0.2rem;
    color: var(--text-light);
  }

  .subtitle {
    color: rgb(77 76 76);
    text-align: justify;
  }

  .share-items {
    display: flex;

    .share-icon {
      cursor: pointer;
      font-size: 2rem;
      margin-block: 1rem;
    }

    .facebook {
      margin-inline: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex: 100%;
  }
}

body[theme-dark] {
  .blog-content-info {
    .title {
      color: var(--text-dark);
    }

    .subtitle {
      color: rgb(144 144 144);
    }
  }
}
</style>
