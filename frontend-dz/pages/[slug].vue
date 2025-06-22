<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="componentData" />
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
const route = useRoute();
const strapi = useStrapiData();
const componentData = ref([]);

onMounted(async () => {
  try {
    const { components } = await strapi.getSinglePage(
      route.params.slug,
      "pages"
    );
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
