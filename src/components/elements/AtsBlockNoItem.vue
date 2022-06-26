<template>
  <div
    :class="{
      'ats-block-no-item': true,
      'ats-block-no-item--active': isActive,
      'ats-block-no-item--disabled': disabled,
    }"
    @click="onCLick"
  >
    <span class="ats-block-no-item__name">{{ NO_ATS_TEXT }}</span>
    <span v-if="isActive" class="ats-block-no-item__icon">
      <check-mark-icon />
    </span>
  </div>
</template>

<script>
import CheckMarkIcon from 'components/icons/CheckMarkIcon';
import { NO_ATS_TEXT } from 'js/content';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AtsBlockNoItem',
  components: { CheckMarkIcon },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      NO_ATS_TEXT,
    };
  },
  computed: {
    ...mapGetters('ats', ['activeAts']),
  },
  watch: {
    activeAts(value) {
      if (value) {
        this.isActive = false;
      }
    },
  },
  methods: {
    ...mapActions('ats', ['clearAts']),
    onCLick() {
      !this.isActive && this.clearAts();
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.ats-block-no-item {
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
    pointer-events: none;
  }

  &__name {
    font-weight: 600;
    color: $red-orange;
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
