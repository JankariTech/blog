<template>
  <footer class="sharp-border">

    <div class="f-content">
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
        <a href="https://www.facebook.com/jankaritech" target="_blank" title="Facebook Page"
          class="facebook-hover"
        ><mdi-facebook /></a>
        <a href="https://www.linkedin.com/company/jankaritech" target="_blank" title="LinkedIn Page"
          class="linkedin-hover"
        ><mdi-linkedin /></a>
        <a href="mailto:info@jankaritech.com" target="_blank" title="Mail to info@jankaritech.com"
          class="orange-hover"
        ><mdi-email /></a>
        <a href="tel:+9779806659226" title="Call to +9779806659226" class="blue-hover"><mdi-phone /></a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import useTheme from "../composables/theme"

const { dark } = useTheme()
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  color: #000;
  padding: 1rem;
  background-color: rgb(136 176 75);

  .f-content {
    padding-top: 4rem;
    text-align: center;

    div {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: #fff;

      span {
        color: rgb(68 68 68);
        padding-inline: 0.1rem;
      }
    }

    .logo-av {
      margin-bottom: 3rem;
    }

    .connects {
      a { color: rgb(68 68 68); }

      svg {
        font-size: 1.4rem;
        margin: 2rem;
      }
    }
  }
}

body[theme-dark] footer {
  background-color: #101010;

  .content {
    span {
      color: var(--jankaritech);
    }
  }
}
</style>
