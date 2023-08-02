<template>
    <div>
        <h1>From Project Layout</h1>
        <div v-for="(project, index) in projectData" :key="project.id" class="">
            {{ project.attributes.project.projectTitle }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  componentData: {
    type: Object,
    default: () => {},
  },
});

let projectData = ref([])
projectData.value = props.componentData.projects.data;
</script>

<style lang="scss" scoped>

</style>