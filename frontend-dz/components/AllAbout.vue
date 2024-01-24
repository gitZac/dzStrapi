<template>
  <section class="section all-about has-background-grey-light">
    <div class="container">
      <div class="all-about__intro">
        <h2 v-html="componentData.sectionTitle" class="section-title"></h2>
        <p class="">{{ componentData.sectionIntro }}</p>
      </div>

      <div class="all-about__list-items columns is-multiline">
        <li
          v-for="(item, index) in componentData.listItem"
          :key="index"
          class="all-about__list-item column is-6">
          <v-icon
            :icon="'mdi-' + item.icon"
            size="35px"
            class="all-about__icon" />
          <div class="list-item__content">
            <h3 class="all-about__list-item-title">{{ item.title }}</h3>
            <p class="all-about__list-item-description">
              {{ item.description }}
            </p>
          </div>
        </li>
      </div>
      <div class="all-about__cta-buttons">
        <UtilityButton
          v-for="(button, index) in componentData.ctaButtons"
          :key="index"
          :buttonProps="button" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AllAbout",
  props: {
    componentData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.all-about {
  &__intro {
    text-align: center;
    padding-bottom: 3rem;
    p {
      font-size: 24px;
    }
  }
  &__list-item {
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
  }

  &__list-items {
    list-style: none;
  }

  &__list-item-title {
    font-size: 1.5rem;
  }

  &__list-item-description {
    max-width: 85%;
  }

  &__icon {
    background: $primary;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 1.5rem;
    margin-right: 2rem;
  }

  &__image {
    display: flex;
    flex-direction: column;
    img {
      border-radius: 50%;
      max-width: 300px;
    }
  }

  &__cta-buttons {
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .columns--adjust {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @include from($lg) {
      flex-direction: row;
    }
  }

  .section-title {
    text-align: center;
    padding-bottom: 1rem;
    b {
      background: linear-gradient(0deg, $primary 30%, transparent 0);
    }
  }

  &__github-info-list {
    li {
      padding-bottom: 0.5rem;
    }
  }
}
</style>
