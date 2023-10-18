<template>
  <article>
    <section class="blog-header">
      <h1>{{ data.page.projectTitle }}</h1>
      <img
        :src="
          config.public.STRAPI_URL_BASE +
          data.page.featuredImage.data.attributes.url
        "
        alt="" />
    </section>

    <section class="page-content">
      <div v-html="goodStr"></div>
    </section>

    <pre>{{ data.page }}</pre>
  </article>
</template>

<script setup>
import getSinglePageData from "~~/lib/getStrapiSinglePageData";
import { replaceRelativeImgSrcs } from "~~/lib/utils";

const config = useRuntimeConfig();
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

const deepStr = data.value.page.singlePageContent;
let goodStr = replaceRelativeImgSrcs(deepStr);
</script>

<style lang="scss" scoped></style>
