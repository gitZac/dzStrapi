<template>
  <div v-if="!menuData">Loading</div>
  <div v-else>
    <NavFooter :menuData="menuData" />
  </div>
</template>

<script setup>
import { useStrapiData } from "~/composables/useStrapiData";
const strapi = useStrapiData();
const menuData = ref(null);

onMounted(async () => {
  try {
    const { menu } = await strapi.getMenu("1");
    menuData.value = menu;
  } catch (err) {
    menu.value = {
      items: [],
    };
    console.log(err);
    return;
  }
});
</script>
