<template>
  <main v-if="attributesData" class="entry-content">
    <NuxtLayout />
    <article class="blog-post">
      <BlogHero
        :heroImage="attributesData.featuredImage?.data?.attributes"
        :title="attributesData.projectTitle" />
      <PageContent :content="attributesData.singlePageContent" />
    </article>
    <NuxtLayout name="footer" />
  </main>
  <main v-else>Attribs loading</main>
</template>

<script setup>
const route = useRoute();
const strapi = useStrapiData();
const attributesData = ref(null);

onMounted(async () => {
  try {
    const { attributes } = await strapi.getSinglePage(
      route.params.slug,
      "projects"
    );

    attributesData.value = attributes;
  } catch (err) {
    attributesData.value = {
      components: [],
    };
    console.log(err);
    return;
  }
});
</script>

<style lang="scss" scoped>
.blog-post {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
