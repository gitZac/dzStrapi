<template>
  <section class="page-content">
    <div class="container">
      <div class="page-content__content" v-html="getParsedConent"></div>
    </div>
  </section>
</template>

<script setup>
import { replaceRelativeImgSrcs } from "~~/lib/utils";

const props = defineProps({
  content: {
    type: String,
    default: "Sorry, there is no content to display at this time.",
  },
});

const getParsedConent = computed(() => {
  return replaceRelativeImgSrcs(props.content);
});
</script>

<style lang="scss">
.page-content {
  p {
    padding-bottom: 2rem;
  }
  img {
    border-radius: 16px;
    margin-bottom: 3rem;
  }
}
</style>
