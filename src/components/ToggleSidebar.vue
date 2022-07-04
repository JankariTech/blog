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
  height: 15px;
  width: 20px;
  position: relative;
  cursor: pointer;

  .line {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #000;
    border-radius: 100px;
  }
}

.closed {
  .top-line {
    transition: all 0.5s ease-in-out;
    top: 0;
  }

  .middle-line {
    transition: all 0.5s ease-in-out;
    top: 6px;
  }

  .base-line {
    transition: all 0.5s ease-in-out;
    top: 12px;
  }
}

.opened {
  .top-line {
    transition: all 0.5s ease-in-out;
    top: 5px;
    left: 5px;
    transform: rotate(226deg);
  }

  .middle-line {
    opacity: 0;
  }

  .base-line {
    transition: all 0.5s ease-in-out;
    top: 5px;
    left: 5px;
    transform: rotate(133deg);
  }
}

body[theme-dark] {
  .line {
    background: white !important;
  }
}
</style>
