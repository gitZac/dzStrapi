<template>
<div>
  <NuxtLayout />
    <h1>hellow from {{$route.params.slug}}</h1>
  <NuxtLayout name="footer" />
</div>

</template>

<script setup>
import getSinglePageData from '~/lib/getStrapiSinglePageData'
const route = useRoute()
const { data } = await useAsyncData(
  () => {
    return getSinglePageData(route.params.slug)
  },
  {
    transform(data){
      return{
        components: data.page.components
      }
    }
  }
)
</script>