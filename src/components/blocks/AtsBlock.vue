<template>
  <div class="ats-block">
    <ats-block-item
      :is-active="isActive(NO_ATS_TEXT)"
      class="ats-block__item--not"
      :disabled="isPopover"
      no-ats
      @click="onAtsItemClick(NO_ATS_TEXT)"
    >
      {{ isPopover }}{{ NO_ATS_TEXT }}
    </ats-block-item>
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
import { NO_ATS_TEXT } from 'js/content';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AtsBlock',
  components: { AtsBlockTitle, AtsBlockItem },
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
  data() {
    return {
      NO_ATS_TEXT,
    };
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  height: 100%;
  max-height: base-unit(590);
  padding: 0 base-unit(14);

  @media screen and (max-width: $screen-ad) {
    width: 33%;
    max-height: base-unit(800);
  }

  @media screen and (max-width: $screen-md) {
    width: 50%;
    max-height: base-unit(1200);
  }

  @media screen and (max-width: $screen-sm) {
    width: 100%;
    max-height: 100%;
    padding: 0;
  }

  &__item {
    margin-right: base-unit(25);

    @media screen and (max-width: $screen-sm) {
      margin-right: 0;
    }

    &--not {
      margin-bottom: base-unit(17);
    }

    &--last {
      margin-bottom: base-unit(15);
    }
  }
}
</style>
