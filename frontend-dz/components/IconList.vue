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
          class="all-about__list-item column is-4">
          <div class="all-about__list-item-wrap">
            <v-icon :icon="'mdi-' + item.icon" class="all-about__icon" />
            <div class="all-about__list-item-content">
              <h3 class="all-about__list-item-title">{{ item.title }}</h3>
              <p class="all-about__list-item-description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </li>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IconList",
  props: {
    componentData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.all-about {
  color: #fff;
  background: url("./../assets/img/background-dark-grad.svg") no-repeat center
    center;
  background-size: cover;

  &__intro {
    text-align: center;
    padding-bottom: 5rem;
    p {
      font-size: 24px;
    }
  }

  &__icon {
    color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.5rem;
    font-size: 65px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }

  &__list-item-title {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    line-height: 35px;
  }

  &__list-item-description {
    text-align: center;
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
}

.section.all-about {
  padding: 6rem 3rem;
}
</style>
