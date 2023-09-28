<template>
  <section class="project-layout">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="columns is-multiline">
        <div
          v-for="(project, index) in projectData"
          :key="project.id"
          class="column is-half">
          <ProjectCard :componentData="project.attributes.project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  componentData: {
    type: Object,
    default: () => {},
  },
});

let projectData = ref([]);
projectData.value = props.componentData.projects.data;
</script>

<style lang="scss" scoped>
.project-layout {
  padding: 3rem 0;
}
</style>
