<template>
  <div class="home-view">
    <img
      v-if="loading"
      :src="loadingImage"
      height="30"
      width="30"
      alt="loading"
      class="spinner"
    />

    <div class="home-view--search">
      <input
        id="search"
        v-model="search"
        placeholder="Search..."
        @keyup.enter="makeSearch"
      >
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

      <div class="menu">
        <button class="icon-button" title="Filter"
          @click="toggleFilterMenu"
          :class="{ 'filtering' : $route.name === 'Filter' }"
        >
          <mdi-filter class="one-rem" />
        </button>
        <div class="menu-drop" v-if="filterMenu">
          <div class="menu-drop-item" @click="setFilterKey('author')"
            :class="{'item-active': $route.params.filterBy === 'author'}"
          >
            Author
          </div>
          <div class="menu-drop-item" @click="setFilterKey('tag')"
            :class="{'item-active': $route.params.filterBy === 'tag'}"
          >
            Tags
          </div>
        </div>
      </div>

      <div class="menu">
        <button class="icon-button" title="Sort"
          @click="toggleSortMenu"
          :class="{ 'sorting' : $route.name === 'Sort' }"
        >
          <mdi-sort class="one-rem" />
        </button>

        <div class="menu-drop" v-if="sortMenu">
          <div class="menu-drop-item" @click="setSortKey('alpha')"
            :class="{'item-active': $route.params.sortBy === 'alpha'}"
          >
            Alphabetically
          </div>
          <div class="menu-drop-item" @click="setSortKey('date')"
            :class="{'item-active': $route.params.sortBy === 'date'}"
          >
            Date Created
          </div>
        </div>
      </div>
    </div>
    <div class="home-view--list">
      <blog-peek
        v-for="(item, index) in peekData"
        :key="index"
        :title="item.title"
        :created-at="item.createdAt"
        :author-name="item.authorName"
        :author-link="item.authorLink"
        :author-avatar="item.authorAvatar"
        :content-length="item.contentLength"
        :tags="item.tags"
        :banner="item.banner"
        @click="goToBlogDetail(item)"
      />
      <div v-if="peekData.length === 0"
        class="home-view--no-results"
      >
        <div class="message">Sorry, no results found for "{{search}}"</div>
        <button @click="clearSearch">Reset Search</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue"
import { useRouter } from "vue-router"
import BlogPeek from "@/components/BlogPeek"
import { getPeekData } from "@/helpers/markdown"

const { currentRoute, push } = useRouter()

const peekData = ref([])
const search = ref("")
const filterMenu = ref(false)
const sortMenu = ref(false)
const loading = ref(false)
const filterBy = ref(null)
const sortBy = ref(null)

onMounted(async () => {
  init()
})

const init = () => {
  loading.value = true
  filterBy.value = currentRoute.value.params.filterBy
  sortBy.value = currentRoute.value.params?.sortBy
  peekData.value = getPeekData()
  sortPeekData(sortBy.value)
  loading.value = false
}

const loadingImage = new URL("../imgs/loading.png", import.meta.url).href

const goToBlogDetail = (item) => {
  const series = item.seriesTitle
  if (series) window.location.href = `/#/blog/${encodeURIComponent(series)}/${encodeURIComponent(item.title)}`
  else window.location.href = `/#/blog/${encodeURIComponent(item.title)}`
}

const makeSearch = () => {
  loading.value = true
  const searchResult = []
  const searchVal = search.value.toLowerCase()
  if (filterBy.value) {
    peekData.value.forEach(item => {
      if (filterBy.value === "tag") {
        if (item.tags && item.tags.join(" ").toLowerCase().includes(searchVal)) {
          searchResult.push(item)
        }
      } else {
        if (item.authorName.toLowerCase().includes(searchVal)) {
          searchResult.push(item)
        }
      }
    })
  } else if (sortBy.value) {
    peekData.value.forEach(item => {
      if (item.title.toLowerCase().includes(searchVal)) {
        searchResult.push(item)
      }
    })
  } else {
    peekData.value.forEach(item => {
      if (item.title.toLowerCase().includes(searchVal)) {
        searchResult.push(item)
      }
    })
  }
  peekData.value = searchResult
  loading.value = false
}

const clearSearch = () => {
  search.value = ""
}

watch(search, () => {
  if (!search.value) {
    peekData.value = getPeekData()
  }
})

const toggleFilterMenu = () => {
  sortMenu.value = false
  filterMenu.value = !filterMenu.value
}

const toggleSortMenu = () => {
  filterMenu.value = false
  sortMenu.value = !sortMenu.value
}

const toHome = () => {
  push({ name: "Home" })
    .then(() => {
      sortPeekData(sortBy.value)
      filterMenu.value = false
      sortMenu.value = false
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
      sortMenu.value = false

      sortPeekData(key)
    })
  }
}

const setFilterKey = (key) => {
  if (currentRoute.value.params.filterBy === key) {
    toHome()
  } else {
    push({
      name: "Filter",
      params: {
        filterBy: key
      }
    }).then(() => {
      filterBy.value = key
      filterMenu.value = false
    })
  }
}

const sortPeekData = (key) => {
  if (key === "date") {
    peekData.value.sort((a, b) => {
      return b["createdAt"] - a["createdAt"]
    })
  } else {
    peekData.value.sort((a, b) => {
      return a["title"].localeCompare(b["title"])
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/home";
</style>
