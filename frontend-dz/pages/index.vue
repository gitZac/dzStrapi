<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="strapiComponentData" :extraComponents="extraComponents"/>
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
import getSinglePageData from "~/lib/getStrapiSinglePageData.js";

const slug = "home";
const strapiCollection = "pages";

let pageData = await getSinglePageData(slug, strapiCollection);
let strapiComponentData = pageData.data.components; //component data we get from strapi.

let projectData = pageData.data.projects;
projectData.componentId = "ProjectLayout";

let extraComponents = ref([]);
extraComponents.value.push(projectData);

</script>
