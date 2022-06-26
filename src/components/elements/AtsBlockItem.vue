<template>
  <div
    :class="{
      'ats-block-item': true,
      'ats-block-item--active': isActive,
      'ats-block-item--disabled': disabled,
    }"
    @click="onClick"
  >
    <span class="ats-block-item__name">
      <slot />
    </span>
    <span v-if="isActive && !disabled" class="ats-block-item__icon">
      <check-mark-icon />
    </span>
  </div>
</template>

<script>
import CheckMarkIcon from 'components/icons/CheckMarkIcon';

export default {
  name: 'AtsBlockItem',
  components: { CheckMarkIcon },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.ats-block-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: base-unit(4) base-unit(4) base-unit(4) base-unit(12);
  border-radius: base-unit(20);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 150, 242, 0.1);
  }

  &--active {
    background-color: rgba(0, 150, 242, 0.1);
  }

  &--disabled {
    padding: base-unit(4) base-unit(12);
    width: fit-content;
    pointer-events: none;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: base-unit(22);
    height: base-unit(22);
    background-color: $dodger-blue;
    border-radius: 100%;
  }
}
</style>
