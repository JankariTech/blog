<template>
  <div class="not-found">
    <div class="sorry">Page Not Found</div>
    <div class="item-404">404</div>
    <a href="/"
      class="go-home"
    >
      <mdi-chevron-left class="one-rem" />
      Go Back Home
    </a>
  </div>
</template>
<script setup>
document.title = "Page Not Found"
</script>
<style lang="scss" scoped>
.not-found {
  min-height: calc(100vh - 9.3vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sorry {
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  .item-404 {
    font-size: 6rem;
    font-weight: bold;
    color: rgb(28 75 28);
  }

  .go-home {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 200px;
    border-radius: 8px;
    outline: none;
    border: 1px solid grey;
    font-size: 1rem;
    color: black;
    text-decoration: none;

    &:hover {
      border: 1px solid black;
      background: #d8d8d8;
    }
  }
}

body[theme-dark] {
  .not-found {
    .item-404 {
      color: lightgreen;
    }

    .go-home {
      color: white !important;
      background: #101010;

      &:hover {
        border: 1px solid grey;
        background: black;
      }
    }
  }
}
</style>
