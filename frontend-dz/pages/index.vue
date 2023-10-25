<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="strapiComponentData" />
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
import getSinglePageData from "~/lib/getStrapiSinglePageData.js";

// Things to build:
// buttons generator: https://markodenic.com/tools/buttons-generator/
// Premiere league table
// Lord of the Rings or English Football ground

const slug = "home";
const strapiCollection = "pages";

let pageData = await getSinglePageData(slug, strapiCollection);
let strapiComponentData = pageData.data.components;
</script>
