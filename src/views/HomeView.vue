<template>
  <div class="home-view">
    <img
      v-if="loading"
      :src="loadingImage"
      height="30"
      width="30"
      alt="Loading Spinner"
      class="spinner"
    />

    <div class="home-view--search">
      <input
        id="search"
        class="home-view--search--input"
        v-model="search"
        :placeholder="getSearchPlaceHolder"
        @keyup.enter="makeSearch"
      >
      <div class="home-view--search--actions">
        <button v-if="search.length > 0"
          class="clear-button"
          @click="clearSearch"
        >
          <mdi-close />
        </button>
        <button class="icon-button" title="Search"
          @click="makeSearch"
        >
          <mdi-search class="one-rem" />
        </button>
        <DropMenu>
          <template #trigger>
            <button class="icon-button" title="Filter"
              :class="{ 'filtering' : $route.name === 'Filter' }"
            >
              <mdi-filter class="one-rem"/>
            </button>
          </template>
          <template #drop>
            <div
              v-for="item in FILTER_OPTIONS"
              :key="item.key"
              class="menu-drop-item" @click="setFilterKey(item.key)"
              :class="{'item-active': $route.params.filterBy === item.key}"
            >
              {{ item.label }}
            </div>
          </template>
        </DropMenu>
        <DropMenu class="menu">
          <template #trigger>
            <button class="icon-button" title="Sort"
              :class="{ 'sorting' : $route.name === 'Sort' }"
            >
              <mdi-sort class="one-rem" />
            </button>
          </template>

          <template #drop>
            <div
              v-for="item in SORT_OPTIONS"
              :key="item.key"
              class="menu-drop-item"
              @click="setSortKey(item.key)"
              :class="{'item-active': $route.params.sortBy === item.key}"
            >
              {{ item.label }}
            </div>
          </template>
        </DropMenu>
        <button class="icon-button" :title="homeViewMode === 'list' ? 'Grid View' : 'List View'"
          :class="{ 'sorting' : $route.name === 'Sort' }"
          @click="toggleHomeViewMode()"
        >
          <mdi-view-compact v-if="homeViewMode === 'list'" class="one-rem" />
          <mdi-view-sequential v-else class="one-rem" />
        </button>
      </div>
    </div>
    <div
      :class="{
        'home-view--list': homeViewMode === 'list',
        'home-view--grid': homeViewMode !== 'list'
      }"
    >
      <blog-peek
        v-for="(item, index) in searchResultBlog"
        :key="index"
        :title="item.title"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :author-name="item.authorName"
        :author-link="item.authorLink"
        :author-avatar="item.authorAvatar"
        :content-length="item.contentLength"
        :tags="item.tags"
        :banner="item.banner"
        @click="goToBlogDetail(item)"
      />
      <div v-if="searchResultBlog.length === 0"
        class="home-view--no-results"
      >
        <div class="message">Sorry, no results found for "{{ search }}"</div>
        <button @click="clearSearch">Reset Search</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue"
import { useRouter } from "vue-router"
import BlogPeek from "../components/BlogPeek"
import DropMenu from "../components/DropMenu"
import { getPeekData } from "../helpers/markdown"
import getImageUrl from "../helpers/images"
import { Storage } from "../helpers/storage"
import { SORT_OPTIONS, FILTER_OPTIONS } from "../helpers/constants"
import { tracker } from "../helpers/tracker"

const { currentRoute, push } = useRouter()

const peekData = ref([])
const search = ref("")
const searchResultBlog = ref([])
const loading = ref(false)
const filterBy = ref(null)
const sortBy = ref(null)
const homeViewMode = ref(null)
const searchPlaceHolder = ref("")

onMounted(async () => {
  init()
  tracker.trackPageView()
})

const getSearchPlaceHolder = computed(() => {
  if (currentRoute.value.params.filterBy) {
    return "search by " + searchPlaceHolder.value
  }
  return "search"
})

const init = () => {
  loading.value = true
  filterBy.value = currentRoute.value.params.filterBy
  sortBy.value = currentRoute.value.params?.sortBy
  peekData.value = getPeekData()
  searchResultBlog.value = getPeekData()
  sortPeekData(sortBy.value)
  loading.value = false
  homeViewMode.value = Storage.getHomeViewMode()
  if (filterBy.value) {
    searchPlaceHolder.value = filterBy.value
  }
}

const loadingImage = getImageUrl("loading")

watch(search, () => {
  if (!search.value) {
    peekData.value = getPeekData()
    searchResultBlog.value = peekData.value
  }
})

const toggleHomeViewMode = () => {
  homeViewMode.value = homeViewMode.value === "list" ? "grid" : "list"
  Storage.saveHomeViewMode(homeViewMode.value)
}

const goToBlogDetail = (item) => {
  const series = item.seriesTitle
  if (series) {
    window.location.href = `/#/blog/${encodeURIComponent(series)}/` +
      `${encodeURIComponent(item.title)}`
  } else window.location.href = `/#/blog/${encodeURIComponent(item.title)}`
}

const makeSearch = () => {
  loading.value = true
  const searchVal = search.value.toLowerCase()
  searchResultBlog.value = []
  if (filterBy.value) {
    peekData.value.forEach(item => {
      switch (filterBy.value) {
      case "tag" :
        if (item.tags && item.tags.join(" ").toLowerCase().includes(searchVal)) {
          searchResultBlog.value.push(item)
        }
        break
      case "author" :
        if (item.authorName.toLowerCase().includes(searchVal)) {
          searchResultBlog.value.push(item)
        }
        break
      case "title":
        if (item.title.toLowerCase().includes(searchVal)) {
          searchResultBlog.value.push(item)
        }
        break
      }
    })
  } else if (sortBy.value) {
    peekData.value.forEach(item => {
      if (item.title.toLowerCase().includes(searchVal)) {
        searchResultBlog.value.push(item)
      }
    })
  } else {
    // by default user can search with any of the options (author, title, tags)
    peekData.value.forEach(item => {
      if ((item.tags && item.tags.join(" ").toLowerCase().includes(searchVal)) || (item.authorName.toLowerCase().includes(searchVal)) || (item.title.toLowerCase().includes(searchVal))) {
        searchResultBlog.value.push(item)
      }
    })
  }
  loading.value = false
}

const clearSearch = () => {
  search.value = ""
}

const toHome = () => {
  push({ name: "Home" })
    .then(() => {
      peekData.value = getPeekData()
      sortPeekData(sortBy.value)
      clearSearch()
    })
}

const setSortKey = (key) => {
  if (currentRoute.value.params.sortBy === key) {
    toHome()
  } else {
    push({
      name: "Sort",
      params: {
        sortBy: key
      }
    }).then(() => {
      filterBy.value = key

      sortPeekData(key)
    })
  }
}

const setFilterKey = (key) => {
  if (currentRoute.value.params.filterBy === key) {
    toHome()
  } else {
    searchPlaceHolder.value = key
    push({
      name: "Filter",
      params: {
        filterBy: key
      }
    }).then(() => {
      filterBy.value = key
    })
  }
}

const sortPeekData = (key) => {
  if (key === "alpha") {
    searchResultBlog.value.sort((a, b) => {
      return a["title"].localeCompare(b["title"])
    })
  } else {
    searchResultBlog.value.sort((a, b) => {
      return b["createdAt"] - a["createdAt"]
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/home";
</style>
