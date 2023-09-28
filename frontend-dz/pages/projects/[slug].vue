!
<template>
  <div>
    <h1>From dynamic route</h1>

    {{ data.project }}
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
    transform(pageData) {
      return {
        project: pageData.data.project,
      };
    },
  }
);

console.log(data.value.project);
</script>

<style lang="scss" scoped></style>
