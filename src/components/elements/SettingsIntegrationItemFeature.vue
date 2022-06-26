<template>
  <p
    :class="{
      feature: true,
      'feature--not-supported': notSupported,
    }"
  >
    <span class="feature__icon">
      <template v-if="notSupported">
        <close-icon />
      </template>
      <template v-else>
        <check-mark-icon />
      </template>
    </span>
    <slot />
  </p>
</template>

<script>
import CheckMarkIcon from 'components/icons/CheckMarkIcon';
import CloseIcon from 'components/icons/CloseIcon';

export default {
  name: 'SettingsIntegrationItemFeature',
  components: { CheckMarkIcon, CloseIcon },
  props: {
    notSupported: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.feature {
  display: flex;
  align-items: center;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: base-unit(24);
    height: base-unit(24);
    margin-right: base-unit(12);
    background-color: $dodger-blue;
    border-radius: base-unit(8);
  }

  &--not-supported {
    color: $grey-chateau;

    .feature__icon {
      background-color: $white-smoke;
    }
  }
}
</style>
