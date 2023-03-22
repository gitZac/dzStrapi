<template>
  <div>
    <NuxtLayout />
    <h1>Hello world</h1>
    {{pageData}}
  </div>
</template>
<script setup>
/*
Who its for: 
- Portfolio site
  0 For recruiters, other developers, hiring managers
  0 Potential freelance less important, but should still be able to serve that purpose in some capacity
- Purpose would be to keep it as modern as possible, using the most modern tech stack possible.

- What it has:

- About
- Projects
  0 Side projects and Work projects
- Resume, maybe
- Cool stuff?
  0 Not necessarily past projects, but stuff you want to build
  0 Velociracer
- Blog
  0 Learning log is a cool idea, maybe some articles

Data:
- CMS in Strapi
- Git Repo API on about section
*/

import getPageData from '~/lib/getStrapiPageData.js'
let pageData = ref([])
pageData.value = await getPageData();
</script>

