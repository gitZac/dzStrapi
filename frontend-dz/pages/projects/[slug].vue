<template>
  <div>
    <h1>From dynamic route</h1>

    {{ data.page }}
  </div>
</template>

<script setup>
import getSinglePageData from "~~/lib/getStrapiSinglePageData";

const route = useRoute();
const pageSlug = route.params.slug;
const { data } = await useAsyncData(
  () => {
    return getSinglePageData(pageSlug, "projects");
  },
  {
    transform(page) {
      return {
        page: page.data,
      };
    },
  }
);

console.log(data.value);
</script>

<style lang="scss" scoped></style>
