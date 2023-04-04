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

<script>
export default {
    props:{
        componentData: {
            type: Object,
        }
    },
    setup(props){
        let components = ref([]);
        components = props.componentData.map( (component) => {
        const componentName = component.componentId;
        const {...data} = component;
            return{
                data: data,
                component: defineAsyncComponent(() => {
                return import (`../components/${componentName}.vue`)
                })
            }
        })

        return { components }

    }
}
</script>

<style>

</style>