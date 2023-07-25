<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="data.components" />
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
import getSinglePageData from "~/lib/getStrapiSinglePageData";
const route = useRoute();
const strapiCollection = "pages";
const { data } = await useAsyncData(
  () => {
    return getSinglePageData(route.params.slug, strapiCollection);
  },
  {
    transform(pageData) {
      return {
        components: pageData.data.components,
      };
    },
  }
);
</script>
