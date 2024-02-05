<template>
  <div>
    <NavFooter :menuData="menu" />
  </div>
</template>

<script setup>
const strapi = useStrapiData();
const { menu } = await strapi.getMenu("1");
</script>
