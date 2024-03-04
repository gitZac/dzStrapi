<template>
  <section class="section project-layout">
    <div class="container">
      <h2 class="section-title">{{ componentData.sectionTitle }}</h2>
      <div class="columns is-multiline">
        <div
          v-for="(project, index) in projectData"
          :key="project.id"
          class="column is-half">
          <ProjectCard
            :componentData="project.attributes.projectCard"
            :slug="project.attributes.slug" />
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
<style lang="scss">
.project-layout {
  .section-title {
    padding-bottom: 5rem;
  }

  .column {
    padding: 0;
  }
}
</style>
