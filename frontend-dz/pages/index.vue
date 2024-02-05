<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="components" />
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
const strapi = useStrapiData();
const { components } = await strapi.getSinglePage("home", "pages");
</script>
