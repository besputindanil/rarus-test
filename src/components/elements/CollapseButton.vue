<template>
  <button class="collapse-button" @click="onCLick">
    <slot />
    <arrow-down-icon
      :class="{
        'collapse-button__icon': true,
        'collapse-button__icon--rotate': rotate,
      }"
    />
  </button>
</template>

<script>
import ArrowDownIcon from 'components/icons/ArrowDownIcon';

export default {
  name: 'CollapseButton',
  components: { ArrowDownIcon },
  data() {
    return { rotate: false };
  },
  methods: {
    onCLick() {
      this.rotate = !this.rotate;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapse-button {
  display: flex;
  align-items: center;
  color: $dodger-blue;
  font-size: base-unit(14);
  line-height: base-unit(22);
  font-weight: 600;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &__icon {
    margin-left: base-unit(4);
    transition: transform 0.3s linear;

    &--rotate {
      transform: rotate(180deg);
    }
  }

  @media screen and (max-width: $screen-sm) {
    font-size: base-unit(12);
  }
}
</style>
