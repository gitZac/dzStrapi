<template>
  <div>
    <component
      v-once
      v-for="(component, index) in components"
      :is="component.component"
      :key="index"
      :componentData="component.data">
    </component>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: {
    type: Array,
    default: () => [],
  },
});
let components = ref([]);

components = props.componentData.map((component) => {
  const componentName = getFormattedComponentName(component.__component);
  const data = component;

  return {
    data: data,
    component: defineAsyncComponent(() => {
      return import(`../components/${componentName}.vue`);
    }),
  };
});
</script>
