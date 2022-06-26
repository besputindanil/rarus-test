<template>
  <a class="instructions-link" :href="href" :target="target">
    <arrow-right-up-icon class="instructions-link__icon" /> {{ name }}
  </a>
</template>

<script>
import ArrowRightUpIcon from 'components/icons/ArrowRightUpIcon';

export default {
  name: 'InstructionsLink',
  components: { ArrowRightUpIcon },
  props: {
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_blank',
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.instructions-link {
  color: $cerulean;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &__icon {
    margin-right: base-unit(7);
  }
}
</style>
