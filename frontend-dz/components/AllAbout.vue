<template>
  <section class="section all-about">
    <div class="container">
      <h2 class="section-title">{{ componentData.sectionTitle }}</h2>

      <div class="all-about__content-wrap columns is-multiline">
        <div class="all-about__image column is-one-third">
          <img
            :src="
              config.public.STRAPI_URL_BASE +
              componentData.image.data.attributes.url
            "
            alt="" />
        </div>
        <div class="all-about__content column is-two-thirds">
          <p class="all-about__intro">{{ componentData.intro }}</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <ul class="column is-half-desktop all-about__list-left">
          <li
            v-for="(item, index) in componentData.listItem"
            class="all-about__list-item">
            {{ item.title }}:
            <span class="all-about__list-accent">{{ item.description }}</span>
          </li>
        </ul>
        <ul class="column is-half-desktop all-about__list-right">
          <li
            v-for="(item, index) in componentData.listItem2"
            class="all-about__list-item">
            {{ item.title }}:
            <span class="all-about__list-accent">{{ item.description }}</span>
          </li>
        </ul>
      </div>
      <div class="all-about__contact">
        <h3>Get in touch</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const props = defineProps({
  componentData: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss">
.all-about {
  background: url("./../assets/img/background-light-patterend.svg") no-repeat
    center center;
  background-size: cover;

  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }

  &__content-wrap {
    justify-content: center;
    align-items: center;
    margin-bottom: 50px !important;
  }

  &__content {
    @include from($lg) {
      margin-left: 2rem;
    }
  }

  &__image {
    max-width: 250px;
    margin: 0 auto;
  }

  &__list-left,
  &__list-right {
    padding-top: 0;
    padding-bottom: 0;
  }

  &__list-item {
    margin-bottom: 15px;

    @include from($lg) {
      margin-left: 100px;
    }
  }

  &__list-accent {
    color: $primary;
    font-weight: 500;
  }
}
</style>
