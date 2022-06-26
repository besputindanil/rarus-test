<template>
  <component
    :is="tag"
    :class="{
      'settings-title': true,
      'settings-title--green': green,
      'settings-title--red': red,
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'SettingsTitle',
  props: {
    tag: {
      type: String,
      default: 'h3',
    },
    green: {
      type: Boolean,
      default: false,
    },
    red: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-title {
  color: $raven;
  font-size: base-unit(14);
  line-height: base-unit(22);
  font-weight: 600;

  &--green {
    color: $malachite;
  }

  &--red {
    color: $red-orange;
  }

  @media screen and (max-width: $screen-sm) {
    font-size: base-unit(12);
  }
}
</style>
