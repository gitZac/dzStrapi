<template>
<div>
  <NuxtLayout />
  <h1>hellow from {{$route.params.slug}}</h1>
  {{data.components}}
  <v-btn>click me</v-btn>
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