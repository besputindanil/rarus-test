<template>
  <div class="ats-block">
    <ats-block-no-item class="ats-block__no-item" />
    <template v-for="item in atsData">
      <ats-block-title :title="item.title" />
      <template v-for="(listItem, i) in item.list">
        <ats-block-item
          :item="listItem"
          :class="{
            'ats-block__item': true,
            'ats-block__item--last': i === item.list.length - 1,
          }"
        />
      </template>
    </template>
  </div>
</template>

<script>
import AtsBlockTitle from 'components/elements/AtsBlockTitle';
import AtsBlockItem from 'components/elements/AtsBlockItem';
import AtsBlockNoItem from 'components/elements/AtsBlockNoItem';
import { mapGetters } from 'vuex';

export default {
  name: 'AtsBlock',
  components: { AtsBlockTitle, AtsBlockItem, AtsBlockNoItem },
  props: {
    atsBlock: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters('ats', ['atsData']),
    title() {
      return this.atsBlock?.title;
    },
    list() {
      return this.atsBlock?.list;
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
  }

  &__item {
    margin-right: base-unit(36);

    &--last {
      margin-bottom: base-unit(10);
    }
  }
}
</style>
