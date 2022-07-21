<template>
  <div class="blog-peek"
    :class="{
      'small-shadow-hover': !detailView && !dark,
      'small-shadow-dark-hover': !detailView && dark,
    }"
  >
    <div class="blog-peek--banner"
      :class="{'detail-view-banner': detailView}"
    >
      <img
        v-if="banner || fallbackBanner"
        :src="banner || fallbackBanner"
        alt="Blog Banner"
        class="image-contain"
        :class="{
          'fallback-banner-xs': xs,
          'fallback-banner': !detailView && !banner,
          'fallback-detail-banner': detailView && !banner
        }"

      >
    </div>
    <div class="blog-peek--author">
      <img
        :src="authorAvatar"
        class="author-avatar"
        alt="author avatar"
      />
      <div class="author-info">
        <a
          v-if="!!authorLink"
          :href="authorLink"
          target="_blank"
          :title="authorName"
          class="author-link"
        >
          {{ authorName }}
        </a>
        <div v-else class="author-name">{{ authorName }}</div>
        <div class="created-at" title="Created Timestamp">
          {{ moment(createdAt).format("MMM DD, YYYY") }}
          ({{ moment(createdAt).fromNow() }})
        </div>
      </div>
    </div>
    <div class="blog-peek--content">
      <component class="blog-title"
        :is="detailView ? 'h1' : 'h3'"
      >
        {{ title }}
      </component>
      <div class="tags">
        <span v-for="(item, index) in tags"
          :key="index"
          class="tag-item"
        >
          #{{item}}
        </span>
      </div>
    </div>
    <div v-if="!detailView" class="blog-peek--footer">
      <button
        aria-label="Share"
        title="Share Post"
        class="icon-button"
      >
        <mdi-share-variant class="one-rem" />
      </button>
      <div class="read-time">
        {{ minutesToRead }} minutes of read
      </div>
    </div>
  </div>
</template>
<script setup>
import moment from "moment"
import { defineProps, computed } from "vue"
import useTheme from "../composables/theme"
import getImageUrl from "../helpers/images"
import useScreen from "../composables/screen"

const fallBackBannerDark = getImageUrl("../imgs/fallback_banner_dark.png")
const fallBackBanner = getImageUrl("../imgs/fallback_banner.png")

defineProps({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorAvatar: {
    type: String,
    required: true
  },
  authorLink: {
    type: String,
    default: null
  },
  createdAt: {
    type: [Date, String],
    required: true
  },
  contentLength: {
    type: Number,
    default: 0
  },
  detailView: {
    type: Boolean,
    default: false
  },
  banner: {
    type: String,
    default: null
  }
})

const { dark } = useTheme()
const { xs } = useScreen()

const fallbackBanner = computed(() => {
  if (xs.value) return getImageUrl("../imgs/jt_logo_small.png")
  return dark.value ? fallBackBannerDark : fallBackBanner
})
</script>
<script>
export default {
  computed: {
    minutesToRead () {
      // assumed: 100 words in a minute with average 6 chars per word
      return Math.round(this.contentLength / (100 * 6))
    }
  }
}
</script>
<style lang="scss" scoped>
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.blog-peek {
  margin: 1.6rem;
  padding-bottom: .5rem;
  border: 1px solid grey;
  border-radius: var(--default-border-radius);

  .detail-view-banner {
    height: 300px !important;
    border-bottom: none !important;
  }

  .fallback-detail-banner {
    max-width: 450px !important;
  }

  .fallback-banner {
    max-width: 300px;
    margin: auto;
  }

  &--banner {
    text-align: center;
    height: 150px;
    display: flex;
    background: #dadada;
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
    overflow: hidden;

    img {
      height: 150px;
      width: 100%;
    }

    border-bottom: 1px solid grey;
  }

  &--author {
    padding: 1rem;
    display: flex;
    align-items: center;

    .author-avatar {
      border-radius: 50%;
      height: 36px;
      width: 36px;
    }

    .author-info {
      padding-left: 0.5rem;
    }

    .author-name {
      font-size: 0.95rem;
      font-weight: 500;
    }

    .created-at {
      font-size: 0.75rem;
    }

    .author-link {
      font-weight: 500;
    }
  }

  &--content {
    padding: 0.5rem 1rem;

    .blog-title {
      &:hover {
        color: rgb(28 75 28);
      }
    }

    .tags {
      padding-top: 0.5rem;

      .tag-item {
        font-size: 0.875rem;
        font-style: italic;
        margin: 0 0.2rem;
        padding: 0.2rem;
        border-radius: 4px;
        background-color: rgb(233 233 233);
      }
    }
  }

  &--footer {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .read-time {
      font-size: 0.7rem;
      padding: 0.5rem;
    }

    .icon-button {
      height: 32px;
      width: 32px;
    }
  }
}

body[theme-dark] {
  .author-link {
    color: #fff;
  }

  .blog-peek {
    .tag-item {
      background-color: rgb(66 66 66);
    }

    .blog-title {
      &:hover {
        color: rgb(197 255 197);
      }
    }

    &--banner {
      background: black;
    }
  }
}

.image-contain {
  object-fit: cover;
  border-bottom: 1px solid #dedddd;
}

.fallback-banner-xs {
  max-width: 100px !important;
  max-height: 100px !important;
}
</style>
