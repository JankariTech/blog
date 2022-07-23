<template>
  <div class="toggle-sidebar" @click="toggle"
    :class="{
      'opened': open,
      'closed': !open
    }"
  >
    <div class="line top-line" />
    <div class="line middle-line" />
    <div class="line base-line" />
  </div>
</template>
<script setup>
import useSidebar from "../composables/sidebar"

const { open, toggle } = useSidebar()
</script>
<style lang="scss" scoped>
.toggle-sidebar {
  z-index: 9999;
  top: 12px;
  left: 1rem;
  height: 35px;
  width: 36px;
  position: fixed;
  cursor: pointer;
  border-radius: var(--default-border-radius);
  padding: 8px;
  box-shadow: 0 0 10px var(--jankaritech);

  .line {
    position: absolute;
    height: 2px;
    background-color: var(--jankaritech--darken-1);
    width: calc(100% - 16px);
    border-radius: 100px;
  }
}

.closed {
  .top-line {
    transition: all 0.5s ease-in-out;
    top: 10px;
  }

  .middle-line {
    transition: all 0.5s ease-in-out;
    top: 16px;
  }

  .base-line {
    transition: all 0.5s ease-in-out;
    top: 22px;
  }
}

.opened {
  .top-line {
    transition: all 0.5s ease-in-out;
    top: 16px;
    transform: rotate(225deg);
  }

  .middle-line {
    opacity: 0;
  }

  .base-line {
    transition: all 0.5s ease-in-out;
    top: 16px;
    transform: rotate(135deg);
  }
}

body[theme-dark] {
  .line {
    background: white !important;
  }
}
</style>
