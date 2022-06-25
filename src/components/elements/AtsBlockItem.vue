<template>
  <div :class="{
    'ats-block-item': true,
    'ats-block-item--active': isActive
  }" @click="onClick">
    <span class="ats-block-item__name">{{ name }}</span>
    <span v-if="isActive" class="ats-block-item__icon">
      <check-mark-icon />
    </span>
  </div>
</template>

<script>
import CheckMarkIcon from "components/icons/CheckMarkIcon";
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'AtsBlockItem',
  components: { CheckMarkIcon },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters('ats', ['activeAtsId']),
    name() {
      return this.item?.name
    },
    id() {
      return this.item?.id
    },
    isActive() {
      return this.id && this.id  === this.activeAtsId;
    }
  },
  methods: {
    ...mapActions('ats', ['setAts','clearAts']),
    onClick() {
      this.isActive ? this.clearAts() : this.setAts(this.item)
    }
  },
}
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