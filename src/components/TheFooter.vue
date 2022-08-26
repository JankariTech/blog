<template>
  <footer class="sharp-border">
    <div class="footer-content">
      This is a footer
    </div>
  </footer>
</template>
<style scoped lang="scss">
footer {
  width: 100%;
  color: #000;
  padding: 1rem;
  background-color: rgb(212 212 212);
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body[theme-dark] footer {
  background-color: #000;
  color: #fff;
}
</style>
