<template>
  <div class="ats-block">
    <ats-block-no-item
      :class="{
        'ats-block__no-item': true,
        'ats-block__no-item--popover': isPopover,
      }"
      :disabled="isPopover"
    />
    <template v-for="item in atsData">
      <ats-block-title :key="item.id">
        {{ item.title }}
      </ats-block-title>
      <template v-for="(listItem, i) in item.list">
        <ats-block-item
          :key="listItem.id"
          :is-active="isActive(listItem.name)"
          :disabled="isPopover"
          :class="{
            'ats-block__item': true,
            'ats-block__item--last': i === item.list.length - 1,
          }"
          @click="onAtsItemClick(listItem.name)"
        >
          {{ listItem.name }}
        </ats-block-item>
      </template>
    </template>
  </div>
</template>

<script>
import AtsBlockTitle from 'components/elements/AtsBlockTitle';
import AtsBlockItem from 'components/elements/AtsBlockItem';
import AtsBlockNoItem from 'components/elements/AtsBlockNoItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AtsBlock',
  components: { AtsBlockTitle, AtsBlockItem, AtsBlockNoItem },
  props: {
    atsBlock: {
      type: Object,
      default: () => {},
    },
    isPopover: {
      isActive: {
        type: Boolean,
        default: false,
      },
    },
  },
  computed: {
    ...mapGetters('ats', ['atsData', 'activeAts']),
  },
  methods: {
    ...mapActions('ats', ['setAts', 'clearAts']),
    onAtsItemClick(name) {
      this.isActive(name) ? this.clearAts() : this.setAts(name);
    },
    isActive(name) {
      return name && name === this.activeAts;
    },
  },
};
</script>

<style lang="scss" scoped>
.ats-block {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &__no-item {
    margin-bottom: base-unit(10);

    &--popover {
      order: 1;
    }
  }

  &__item {
    margin-right: base-unit(36);

    &--last {
      margin-bottom: base-unit(10);
    }
  }
}
</style>
