<template>
  <button
    window.location.href="https://google.com"
    class="dz-button button"
    :class="[
      {
        'is-outlined': buttonProps.isOutlined,
      },
      buttonProps.buttonColor ? 'is-' + buttonProps.buttonColor : '',
      buttonProps.buttonSize ? 'is-' + buttonProps.buttonSize : '',
      classes,
    ]">
    <a class="dz-button__link" :href="buttonProps.link">
      <v-icon
        v-if="buttonProps.Icon"
        class="dz-button__icon"
        :icon="'mdi-' + buttonProps.Icon"
        size="24px" />
      {{ buttonProps.buttonText }}
    </a>
  </button>
</template>

<script>
export default {
  name: "UtilityButton",
  props: {
    buttonProps: {
      type: Object,
    },
    classes: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.dz-button {
  &__icon {
    margin-right: 5px;
  }
  &__link {
    color: inherit !important;
  }
}
</style>
