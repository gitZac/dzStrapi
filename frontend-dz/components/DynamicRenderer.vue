<template>
  <div>
    <component
      v-once
      v-for="(component, index) in components"
      :is="component.component"
      :key="index"
      :componentData="component.data"
    >
    </component>
  </div>
</template>

<script setup>
const props = defineProps({
  componentData: {
    type: Array,
    default: () => [],
  },
  extraComponents: {
    type: Array,
    default: ()=> []
  }
});
let components = ref([]);

props.componentData.push(...props.extraComponents);

components = props.componentData.map((component) => {
  const componentName = component.componentId;
  const data  = component;
  
  return {
    data: data,
    component: defineAsyncComponent(() => {
      return import(`../components/${componentName}.vue`);
    }),
  };
});
</script>
