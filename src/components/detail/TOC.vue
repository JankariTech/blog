<template>
  <div>
    <div v-for="item in toc" :key="item.id" :style="{ paddingLeft: item.val * 0.2 + 'em' }">

      <div class="toc--item toc-content">
        <button v-if="item.node && item.node.length" type="button" class="toc-toggle"
          :aria-expanded="!collapsed.has(item.id)" :aria-controls="`toc-children-${item.id}`"
          :aria-label="collapsed.has(item.id) ? 'Expand section' : 'Collapse section'" @click.stop="toggle(item.id)"
          @keydown.enter.prevent.stop="toggle(item.id)" @keydown.space.prevent.stop="toggle(item.id)">
          <mdi-menu-right v-if="collapsed.has(item.id)" class="mdi-circle" />
          <mdi-menu-down v-else class="mdi-circle" />
        </button>
        <mdi-menu-right v-else class="mdi-circle" />

        <button type="button" class="toc-link" @click="scrollToHeading(item.id, $event)"
          @keydown.enter.prevent="scrollToHeading(item.id, $event)"
          @keydown.space.prevent="scrollToHeading(item.id, $event)">
          <span class="toc-text">{{ item.title }}</span>
        </button>
      </div>

      <Transition v-if="item.node && item.node.length" name="collapse">
        <div :id="`toc-children-${item.id}`" v-show="!collapsed.has(item.id)">
          <TOC :toc="item.node" />
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue"

defineProps({
  toc: {
    type: Array,
    default: () => []
  }
})

const collapsed = ref(new Set())

const toggle = (id) => {
  if (collapsed.value.has(id)) {
    collapsed.value.delete(id)
  } else {
    collapsed.value.add(id)
  }
}

const scrollToHeading = (headingId, e) => {
  e.stopPropagation()

  const heading = document.getElementById(headingId)
  if (!heading) return

  const position = heading.getBoundingClientRect()

  window.scrollTo({
    top: position.top + window.scrollY - 100,
    behavior: "smooth"
  })
}
</script>
<script>
export default { name: "TOC" }
</script>
<style scoped>
.toc-content {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 0 !important;
}

.toc-toggle, .toc-link {
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.mdi-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toc-link {
  text-align: left;
}

.collapse-enter-active, .collapse-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.collapse-enter-from, .collapse-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
