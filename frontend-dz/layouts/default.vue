<template>
  <div>
    <NavNavbar :menuData="menu" />
  </div>
</template>

<script setup>
import { useStrapiData } from "~/composables/useStrapiData";
const strapi = useStrapiData();
const { menu } = await strapi.getMenu("1");
</script>
