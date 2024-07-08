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
          :size="140"
        />
        <a class="author-name"
          :href="peek.authorLink"
          :title="peek.authorName"
          target="_blank"
        >
          {{ peek.authorName }}
        </a>
        <div class="vl">|</div>
        <div class="created-at">
          Published:
          <span>{{ $moment(peek.createdAt).format("MMMM DD, YYYY") }}</span>
        </div>
        <div v-if="peek.updatedAt" class="vl">|</div>
        <div v-if="peek.updatedAt" class="updated-at">
          Last Updated:
          <span>{{ $moment(peek.updatedAt).format("MMMM DD, YYYY") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheAvatar from "../TheAvatar"
import { computed, defineProps } from "vue"
import useTheme from "../../composables/theme"
import getImageUrl from "../../helpers/images"

const { dark } = useTheme()

defineProps({
  peek: {
    type: Object,
    required: true
  }
})

const fallbackBanner = computed(() => {
  if (dark.value) {
    return getImageUrl("fallback_banner_dark")
  } else {
    return getImageUrl("fallback_banner")
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
      max-height: 80vh;
      min-height: 30vh !important;
      object-fit: cover;
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

        .created-at, .updated-at, .vl {
          display: flex;
          align-items: center;
          color: grey;
          font-size: 0.875rem;
          line-height: 1.2rem;
          padding-inline: 0.2rem;

          span {
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
