<template>
  <section class="page-content">
    <div class="container">
      <div class="page-content__content" v-html="getParsedConent"></div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: "Sorry, there is no content to display at this time.",
  },
});
const config = useRuntimeConfig();

const base = config.public.STRAPI_URL_BASE;

const getParsedConent = computed(() => {
  return replaceRelativeImgSrcs(props.content, base);
});
</script>

<style lang="scss">
.page-content {
  p {
    padding-bottom: 2rem;
  }
  img {
    border-radius: 16px;
    margin-bottom: 3rem;
  }
}
</style>
