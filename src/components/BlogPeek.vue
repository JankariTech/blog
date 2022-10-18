<template>
  <div class="blog-peek"
    :class="{
      'small-shadow': !detailView && !dark,
      'small-shadow-dark': !detailView && dark,
    }"
  >
    <div class="blog-peek--banner"
      :class="{
        'blog-peek--banner--fallback': !banner
      }"
    >
      <img
        v-if="banner || fallbackBanner"
        :src="banner || fallbackBanner"
        alt="Blog Banner"
        :class="{
          'fallback-banner': !banner,
          'regular-banner': banner
        }"

      >
    </div>
    <div class="blog-peek--divider" />
    <div class="blog-peek--author">
      <img
        :src="authorAvatar"
        class="author-avatar circle"
        alt="Author Avatar"
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
import { computed } from "vue"
import useTheme from "../composables/theme"
import getImageUrl from "../helpers/images"

const fallBackBannerDark = getImageUrl("fallback_banner_dark")
const fallBackBanner = getImageUrl("fallback_banner")

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

const fallbackBanner = computed(() => {
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
<style lang="scss">
@import "../styles/blogPeek";
</style>
