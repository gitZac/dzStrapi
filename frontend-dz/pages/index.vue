<template>
  <main class="entry-content">
    <NuxtLayout />
    <DynamicRenderer :componentData="components" />
    <!-- <NuxtLayout name="footer" /> -->
  </main>
</template>

<script setup>
const { data } = await useFetch("/api/rest");
const components = data.value.components;
</script>
