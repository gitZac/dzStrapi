<template>
  <button 
    class="dz-button button" 
    :class="[
    {
        'is-outlined': buttonProps.isOutlined,
    },
    buttonProps.buttonColor ? 'is-' + buttonProps.buttonColor : '',
    buttonProps.buttonSize ? 'is-' + buttonProps.buttonSize : ''
    ]" 
    >
    <v-icon
    class="dz-button__icon"
    :icon="'mdi-' + buttonProps.Icon" 
    size="24px"/>
    {{buttonProps.buttonText}}
  </button>
</template>

<script>
export default {
    name: 'UtilityButton',
    props:{
        buttonProps: {
            type: Object
        }
    }
}
</script>

<style scoped lang="scss">
.dz-button{
    &__icon{
        margin-right: 5px;
    }
}
</style>