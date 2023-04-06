<template>
  <main class="entry-content">
    <NuxtLayout />
      <DynamicRenderer 
        :componentData="strapiComponentData"
      />
    <NuxtLayout name="footer" />
  </main>
</template>
<script setup>
import getSinglePageData from '~/lib/getStrapiSinglePageData.js'
let pageData = await getSinglePageData('home');
let strapiComponentData = pageData.page.components; //component data we get from strapi.
</script>