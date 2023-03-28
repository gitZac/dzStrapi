<template>
    <div>
        <NavFooter :menuData="menuData.menu"/>
    </div>
</template>

<script setup>
import getMenuData from '~/lib/getStrapiMenuData'
let menuData = ref([])
menuData.value = await getMenuData("1")
</script>
