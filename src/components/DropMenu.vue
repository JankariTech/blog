<template>
  <div class="menu" :class="`menu-${randomKey}`">
    <div class="menu--trigger"
      :class="`menu--trigger-${randomKey}`"
    >
      <slot name="trigger" />
    </div>
    <div
      v-if="toggle"
      class="menu-drop"
      :class="`menu-drop-${randomKey}`"
    >
      <slot name="drop" />
    </div>
  </div>
</template>
<script>
export default {
  emits: ["toggle", "click"],
  data: () => ({
    randomKey: null,
    toggle: false
  }),
  created () {
    this.randomKey = Math.random().toString(36).substring(7)
    window.addEventListener("mouseup", this.onMouseUp)
  },
  methods: {
    onMouseUp (e) {
      const $closestMenuItem = e.target.closest(".menu-drop-item")
      if ($closestMenuItem) {
        // find the menu drop item clicked
        $closestMenuItem.click()
        // and then close the menu drop for this menu
        this.toggle = false
        e.preventDefault()
        return
      }
      const $closestMenuDrop = e.target.closest(`.menu-drop-${this.randomKey}`)
      const $closestMenuTrigger = e.target.closest(`.menu--trigger-${this.randomKey}`)
      if ($closestMenuTrigger) {
        this.toggle = !this.toggle
        return
      }
      if (!$closestMenuDrop) {
        if (this.toggle) {
          this.$emit("toggle", false)
          this.toggle = false
        }
      }
    }
  }
}
</script>
<style lang="scss">
.menu {
  position: relative;

  &-drop {
    position: absolute;
    border: 1px solid grey;
    border-radius: 8px;
    padding: .2rem .4rem;
    background-color: white;
    margin-top: 0.5rem;
    right: -0.5rem;
    width: max-content;

    &-item {
      padding: .3rem .5rem;
      cursor: pointer;
      border-radius: 8px;
      margin: 2px 0;
      width: 100%;
      text-align: start;

      &:hover {
        background-color: rgb(0 0 0 / 10%);
      }

      &.item--active {
        background-color: var(--jankaritech);
      }
    }
  }
}
body[theme-dark] {
  .menu {
    .menu-drop {
      background-color: black;
      color: white;

      .menu-drop-item {
        &:hover {
          background-color: rgb(255 255 255 / 5%);
        }

        &.item-active {
          background-color: rgb(255 255 255 / 10%);
        }
      }
    }
  }
}
</style>
