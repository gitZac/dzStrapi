<template>
  <main class="entry-content">
    <NuxtLayout />

    <DynamicRenderer :componentData="componentData" />
    <NuxtLayout name="footer" />

    <!-- {{ componentData }} -->
  </main>
</template>

<script setup>
import { useStrapiData } from "~/composables/useStrapiData";

const strapi = useStrapiData();
const componentData = ref([]);
// const components = await strapi.getSinglePage("home", "pages");

// console.log(components);
// componentData.value = components;

onMounted(async () => {
  try {
    const { components } = await strapi.getSinglePage("home", "pages");
    componentData.value = components;
  } catch (err) {
    componentData.value = {
      components: [],
    };
    console.log(err);
    return;
  }
});
</script>
