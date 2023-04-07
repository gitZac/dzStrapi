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
const slug = 'home';
const strapiCollection = 'pages';
let pageData = await getSinglePageData(slug, strapiCollection);
let strapiComponentData = pageData.data.components; //component data we get from strapi.
</script>