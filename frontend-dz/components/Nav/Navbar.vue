<template>
  <nav
    v-if="menuData.length > 0"
    class="navbar dz-header"
    role="navigation"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="dz-header__logo-link" href="/">
          <img
            class="dz-header__logo"
            src="~/assets/img/digitalzac-logo2.svg" />
        </a>
        <a
          @click="toggleMenu"
          role="button"
          class="navbar-burger dz-header__burger"
          :class="menuIsActive ? 'is-active' : ''"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="menuIsActive ? 'is-active' : ''">
        <div class="navbar-end dz-header__links">
          <a
            class="navbar-item"
            v-for="item in menuData.items.data"
            :key="item"
            :href="item.attributes.url">
            {{ item.attributes.title }}
          </a>

          <UtilityButton :buttonProps="button" :classes="'dz-header__button'" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    menuData: {
      type: Object,
      default: [],
    },
  },
  data() {
    return {
      menuIsActive: false,
      button: {
        id: 6,
        buttonText: "Get @ Me",
        buttonLink: "#",
        Icon: "",
        buttonSize: "medium",
        buttonColor: "link",
        isOutlined: true,
      },
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
    },
  },
};
</script>

<style scoped lang="scss">
.dz-header {
  margin-top: 1rem;
  &__logo {
    max-width: 300px;
    max-height: auto;
  }

  &__burger {
    span {
      background-color: $primary;
      border-radius: 5px;
      height: 3px;
      width: 20px;
    }
  }

  &__links {
    align-items: center;
  }

  &__burger,
  &__burger:hover {
    background-color: transparent;
  }
  &__logo-link {
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
  }
  .navbar-item {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background-color: transparent;
    }
  }

  &__button {
    margin-left: 0.75rem;
    font-size: 20px;
    text-transform: uppercase;
  }
}
</style>
