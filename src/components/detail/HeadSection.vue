<template>
  <div class="blog--head">
    <img :src="peek.banner || fallbackBanner"
      alt="Blog Banner"
      class="banner sharp-border"
      :class="{'contain': !peek.banner}"
    >
    <div class="blog--head--content">
      <div class="title">{{ peek.title }}</div>
      <div class="author-info">
        <the-avatar :src="peek.authorAvatar"
          alt="Author Avatar"
          class="author-avatar"
          size="140"
        />
        <a class="author-name"
          :href="peek.authorLink"
          :title="peek.authorName"
          target="_blank"
        >
          {{ peek.authorName }}
        </a>
        <div class="created-at">
          <mdi-clock />
          <span>{{ $moment(peek.createdAt).format("LLLL") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheAvatar from "../TheAvatar"
import { computed, defineProps } from "vue"
import useTheme from "../../composables/theme"

const { dark } = useTheme()

defineProps({
  peek: {
    type: Object,
    required: true
  }
})

const fallbackBanner = computed(() => {
  if (dark.value) {
    return "/src/imgs/fallback_banner_dark.png"
  } else {
    return "/src/imgs/fallback_banner.png"
  }
})
</script>
<style lang="scss">
.blog {
  &--head {
    .banner {
      height: auto;
      width: 100%;
      margin-bottom: 2rem;
      max-height: 80vh !important;
    }

    .contain {
      border-bottom: 1px solid grey;
    }

    &--content {
      padding-inline: 1rem;
      max-width: 1600px;
      margin: 0 auto;

      .title {
        font-size: clamp(2rem, 7vw, 7rem);
      }

      .author-info {
        margin-block: 3rem;
        display: flex;

        @media (max-width: 768px) {
          flex-direction: column;

          .author-name {
            margin-block: 1rem;
          }
        }

        align-items: center;

        .author-name {
          font-size: 1rem;
          line-height: 1.2rem;
          padding-inline: 0.5rem;
        }

        .created-at {
          display: flex;
          align-items: center;
          color: grey;
          font-size: 0.875rem;
          line-height: 1.2rem;
          padding-inline: 0.5rem;

          span {
            margin-left: 0.2rem;
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
