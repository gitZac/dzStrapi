<template>
  <main class="entry-content">
    <NuxtLayout />
    <article class="blog-post">
      <BlogHero
        :heroImage="data.page.featuredImage?.data?.attributes"
        :title="data.page.projectTitle" />
      <PageContent :content="data.page.singlePageContent" />
    </article>
    <NuxtLayout name="footer" />
  </main>
</template>

<script setup>
import getSinglePageData from "~~/lib/getStrapiSinglePageData";

const route = useRoute();
const pageSlug = route.params.slug;

const { data } = await useAsyncData(
  () => {
    return getSinglePageData(pageSlug, "projects");
  },
  {
    transform(page) {
      return {
        page: page.data,
      };
    },
  }
);
</script>

<style lang="scss" scoped>
.blog-post {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
