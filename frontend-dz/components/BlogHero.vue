<template>
  <section class="blog-hero">
    <div class="container">
      <div class="blog-hero__content-wrap">
        <h1 class="blog-hero__title">{{ title }}</h1>
        <div v-if="heroImage" class="blog-hero__image-container">
          <img
            class="blog-hero__image"
            :src="config.public.STRAPI_URL_BASE + heroImage?.url"
            :alt="heroImage?.alternativeText" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const props = defineProps({
  heroImage: {
    type: Object,
    default: () => {},
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.blog-hero {
  padding-top: 2rem;
  padding-bottom: 5rem;
  &__title {
    padding-bottom: 1rem;
    text-align: center;
    @include from($lg) {
      padding-bottom: 2rem;
    }
  }

  &__image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__image {
    border-radius: 16px;
  }
}
</style>
