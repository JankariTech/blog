<template>
  <footer class="sharp-border">

    <div class="f-content">

      <div class="connects">
        <a href="https://www.jankaritech.com" target="_blank" title="JankariTech Website"
          class="jankaritech-hover"
        >
          <mdi-web />
        </a>
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

      <div class="f-line">
        <i>
          <span><mdi-format-quote-open class="quote-icon" /></span>
          We develop <span>SOFTWARE</span> that matters. We develop <span>STAFF</span> to reach their peek potential.
          <span><mdi-format-quote-close class="quote-icon" /></span>
        </i>
      </div>

      <div class="foot-note">
        <div class="copyright">
          <span><mdi-copyright /></span>
          <span>JankariTech</span>
          <span>{{ new Date().getFullYear() }}</span>
        </div>
        <div class="rights">
          <span>Made with</span>
          <span><mdi-heart class="mdi-heart" /></span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  color: rgb(54 54 54);
  padding: 1rem 1rem 0;
  background-color: rgb(136 176 75);

  .f-content {
    padding-top: 2rem;
    text-align: center;

    .f-line {
      margin-bottom: 0.5rem;
      text-align: center;
      max-width: 1000px;
      margin-inline: auto;
      letter-spacing: 1px;

      .quote-icon {
        font-size: 16px;
      }

      span {
        color: rgb(244 244 244);
        font-weight: 500;
        font-size: 1.1rem;
        margin-inline: 0.1rem;
      }

      b {
        color: white;
        font-size: 1rem;
      }

      i {
        color: rgb(54 54 54);
        font-size: 0.875rem;
      }
    }

    .connects {
      a { color: rgb(54 54 54); }

      svg {
        font-size: 1.6rem;
        margin: 1rem;
      }

      margin-bottom: 1rem;
    }

    .foot-note {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      padding: 0.2rem 0.2rem 3rem;
      font-size: 12px;
      color: rgb(43 43 43);
      gap: 0.5rem;

      .mdi-heart {
        font-size: 12px;
        margin-inline: 0.2rem;
        color: #c62828;
      }

      .copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;

        .logo {
          margin-right: 0.2rem;
          margin-top: -1px;
        }
      }
    }
  }
}

body[theme-dark] footer {
  background-color: #101010;

  .f-content {
    b {
      color: #706e6e;
    }

    i {
      color: #b3b3b3;
    }
  }

  .connects {
    a { color: rgb(54 54 54); }
  }

  .foot-note {
    color: rgb(104 103 103);
  }
}
</style>
