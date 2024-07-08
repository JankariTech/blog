<template>
  <div class="blog-peek">
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
          Published:
          {{ moment(createdAt).format("MMMM DD, YYYY") }}
          ({{ moment(createdAt).fromNow() }})
        </div>
        <div v-if="updatedAt" class="updated-at" title="Updated Timestamp">
          Last Updated:
          {{ moment(updatedAt).format("MMMM DD, YYYY") }}
          ({{ moment(updatedAt).fromNow() }})
        </div>
      </div>
    </div>
    <div class="blog-peek--content">
      <div class="blog-title">
        {{ title }}
      </div>
      <div class="tags">
        <div v-for="(item, index) in tags"
          :key="index"
          class="tag-item"
        >
          #&nbsp;{{item}}
        </div>
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
  updatedAt: {
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
