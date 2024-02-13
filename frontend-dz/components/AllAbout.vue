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

      <div class="all-about__content"></div>
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
  }

  &__content {
    margin-left: 2rem;
  }

  &__image {
    max-width: 250px;

    // img {
    //   max-width: 250px;
    // }
  }
}
</style>
