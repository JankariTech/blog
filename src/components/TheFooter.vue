<template>
  <footer class="sharp-border">

    <div class="content">
      <TheAvatar
        class="logo-av"
        src="/src/imgs/jt_circle.png"
        size="60"
        bordered="2"
        :borderColor="(dark) ? 'var(--jankaritech)' : '#fff'"
      />
      <div>We develop <span>SOFTWARE</span> that matters</div>
      <div>We develop <span>SOFTWARE</span> so they reach their peak potential</div>

      <div class="connects">
        <a href="https://www.facebook.com/jankaritech" target="_blank" title="Facebook Page"><mdi-facebook /></a>
        <a href="https://www.linkedin.com/company/jankaritech" target="_blank" title="LinkedIn Page"><mdi-linkedin /></a>
        <a href="mailto:info@jankaritech.com" target="_blank"><mdi-email /></a>
        <a href="tel:+9779806659226"><mdi-phone /></a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import useTheme from "../composables/theme"

const {dark} = useTheme()
</script>
<style scoped lang="scss">
footer {
  width: 100%;
  color: #000;
  padding: 1rem;
  background-color: rgb(136 176 75);
  .content {
    padding-top: 4rem;
    text-align: center;
    div {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: .5rem;
      color: #fff;
      span {
        color: #4f4f4f;
      }
    }
    .logo-av {
      margin-bottom: 3rem;
    }
    .connects {
      svg {
        font-size: 1.4rem;
        margin: 2rem;
      }
      .address {
        margin-top: 0;s
        svg {
          font-size: 1rem;
        }
        font-size: .875rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

body[theme-dark] footer {
  background-color: #101010;
  .content {
    span {
      color: var(--jankaritech)
    }
  }
}
</style>
