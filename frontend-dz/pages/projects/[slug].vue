<template>
  <main class="entry-content">
    <NuxtLayout />
    <article class="blog-post">
      <BlogHero
        :heroImage="page.featuredImage?.data?.attributes"
        :title="page.projectTitle" />
      <PageContent :content="page.singlePageContent" />
    </article>
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
const route = useRoute();
const strapi = useStrapiData();
const { page } = await strapi.getSinglePage(route.params.slug, "projects");
</script>

<style lang="scss" scoped>
.blog-post {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
