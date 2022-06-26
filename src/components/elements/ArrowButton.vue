<template>
  <button
    :class="{
      'arrow-button': true,
      'arrow-button--block': block,
      'arrow-button--reverse': reverse,
      'arrow-button--disabled': disabled,
    }"
    @click="onCLick"
  >
    <span class="arrow-button__text">
      <slot />
    </span>
    <arrow-icon class="arrow-button__icon" />
  </button>
</template>

<script>
import ArrowIcon from 'components/icons/ArrowIcon';

export default {
  name: 'ArrowButton',
  components: { ArrowIcon },
  props: {
    text: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCLick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  font-size: base-unit(16);
  font-weight: 600;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &--block {
    width: 100%;
    min-height: base-unit(48);
    padding: base-unit(12);
    background-color: $malachite;
    border-radius: base-unit(8);
  }

  &--reverse {
    .arrow-button__icon {
      order: -1;
      transform: rotate(180deg);
    }
  }

  &--disabled {
    pointer-events: none;
    background-color: $hawkes-blue;
  }

  &__text {
    padding: 0 base-unit(13);
  }
}
</style>
