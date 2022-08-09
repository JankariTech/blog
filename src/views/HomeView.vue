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

      <DropMenu>
        <template #trigger>
          <button class="icon-button" title="Filter"
            :class="{ 'filtering' : $route.name === 'Filter' }"
          >
            <mdi-filter class="one-rem" />
          </button>
        </template>
        <template #drop>
          <div
            v-for="item in filterItems"
            :key="item.key"
            class="menu-drop-item" @click="setFilterKey(item.key)"
            :class="{'item--active': $route.params.filterBy === item.key}"
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
            v-for="item in sortItems"
            class="menu-drop-item"
            @click="setSortKey(item.key)"
            :class="{'item--active': $route.params.sortBy === item.key}"
          >
            {{ item.label }}
          </div>
        </template>
      </DropMenu>
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
import DropMenu from "../components/DropMenu"
import { getPeekData } from "@/helpers/markdown"

const { currentRoute, push } = useRouter()

const peekData = ref([])
const search = ref("")
const loading = ref(false)
const filterBy = ref(null)
const sortBy = ref(null)

const sortItems = [
  {
    key: "alpha",
    label: "Alphabetically"
  },
  {
    key: "date",
    label: "Date Created"
  }
]

const filterItems = [
  {
    key: "author",
    label: "Author"
  },
  {
    key: "tag",
    label: "Tags"
  }
]

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

const toHome = () => {
  push({ name: "Home" })
    .then(() => {
      peekData.value = getPeekData()
      sortPeekData(sortBy.value)
      search.value = ""
    })
}

const setSortKey = (key) => {
  console.log("here")
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
