<template>
  <footer v-if="menuData.length > 0" class="footer">
    <nav class="footer__navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="footer__navbar-menu">
          <a
            class="footer__navbar-item"
            v-for="item in menuData.items.data"
            :key="item"
            :href="item.attributes.url">
            {{ item.attributes.title }}
          </a>
        </div>
        <div class="footer__navbar-menu--social">
          <a
            href="https://github.com/gitZac"
            target="_blank"
            class="footer__social-icon">
            <span class="icon">
              <v-icon icon="mdi-github" size="36px" />
            </span>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/zac-taylor-068875119/"
            target="_blank"
            class="footer__social-icon">
            <span class="icon">
              <v-icon icon="mdi-linkedin" size="36px" />
            </span>
            linkedin
          </a>
        </div>
        <div class="footer__copyright has-text-centered">
          <p>&#169; copyright digitalZac.com</p>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "NavFooter",
  props: {
    menuData: {
      type: Object,
      default: [],
    },
  },
};
</script>
<style scoped lang="scss">
.footer {
  background-color: $dark-bg;
  color: $white;
  padding: 3rem 1.5rem 3rem;

  &__navbar {
    background-color: $dark-bg;
  }

  &__navbar-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include from($xl) {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  &__navbar-menu--social {
    justify-content: center;
    flex-direction: row;
    display: flex;
    padding-top: 3rem;
  }

  &__navbar-item {
    text-align: center;
    color: $white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 5rem;
    transition: all 0.2s;
    background-color: rgba(255, 255, 255, 0.05);
    margin-bottom: 2rem;
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: $white;
      transform: translateY(-3px);
      border-bottom: transparent;
    }

    @include from($xl) {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      margin-bottom: 0;
    }
  }
  &__social-icon {
    color: $white;
    margin: 0 1rem;

    &:hover {
      color: $link;
    }
  }

  &__copyright {
    padding-top: 2rem;
  }
}
</style>
