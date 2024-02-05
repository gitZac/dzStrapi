<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="components" />
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
const route = useRoute();
const strapi = useStrapiData();
const { components } = await strapi.getSinglePage(route.params.slug, "pages");
</script>
