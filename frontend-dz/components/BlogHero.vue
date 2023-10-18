<template>
  <section class="blog-hero">
    <div class="container">
      <h1 class="blog-hero__title">{{ title }}</h1>
      <div class="blog-hero__image-container">
        <img
          class="blog-hero__image"
          :src="config.public.STRAPI_URL_BASE + heroImage.url"
          :alt="heroImage.alternativeText" />
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

<style lang="scss" scoped></style>
