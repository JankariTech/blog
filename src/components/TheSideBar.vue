<template>
  <div v-if="open" class="sidebar">
    <div class="sidebar--content" v-if="sidebarList">
      <div v-for="(item, index) in Object.keys(sidebarList)"
        :key="index"
      >
        <div v-if="typeof (sidebarList[item]) === 'object'"
          class="sidebar--series"
        >
          <div class="sidebar--series--title">
            {{ item }}
          </div>
          <div class="sidebar--item"
            v-for="(subItem, subIndex) in Object.keys(sidebarList[item])"
            :key="subIndex"
          >
            <a
              :title="subItem.title"
              :href="`/blog/${encodeURIComponent(item)}/${encodeURIComponent(subItem)}`"
            >
              {{ subItem }}
            </a>
          </div>
        </div>
        <div v-else class="sidebar--item">
          <a
            :title="item"
            :href="`/blog/${encodeURIComponent(item)}`"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import useSidebar from "@/composables/sidebar"
import useMarkdown from "@/composables/markdown"

const { open } = useSidebar()
const { sidebarList } = useMarkdown()
</script>
<style lang="scss" scoped>
@import "@/styles/sidebar";
</style>
