<template>
  <header class="header">
    <arrow-button v-if="backTo" class="header__button" reverse @click="onHeaderButtonCLick">{{
      BUTTONS_TEXT.SOLUTION
    }}</arrow-button>
    <h1
      :class="{
        header__title: true,
        'header__title--with-button': backTo,
      }"
    >
      {{ title }}
    </h1>
  </header>
</template>

<script>
import ArrowButton from 'components/elements/ArrowButton';
import { BUTTONS_TEXT } from 'js/content';

export default {
  name: 'TheHeader',
  components: { ArrowButton },
  data() {
    return { BUTTONS_TEXT };
  },
  computed: {
    title() {
      const { meta } = this.$route;
      return meta?.title;
    },
    backTo() {
      const { meta } = this.$route;
      return meta?.backTo;
    },
  },
  methods: {
    onHeaderButtonCLick() {
      this.backTo && this.$router.push(this.backTo);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: base-unit(23) base-unit(28) base-unit(17);
  background-color: $sapphire;
  border-radius: 8px;

  @media screen and (max-width: $screen-sm) {
    padding: base-unit(16);
  }

  &__title {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 base-unit(20);
    font-size: base-unit(32);
    line-height: base-unit(40);
    font-weight: 600;
    color: $white;
    text-align: center;

    @media screen and (max-width: $screen-ad) {
      padding: 0 base-unit(10);
      font-size: base-unit(24);
    }

    @media screen and (max-width: $screen-md) {
      padding: 0 base-unit(5);
      font-size: base-unit(16);
    }

    @media screen and (max-width: $screen-sm) {
      font-size: base-unit(14);
    }

    @media screen and (max-width: $screen-xs) {
      font-size: base-unit(12);
    }

    &--with-button {
      margin-left: base-unit(70);
      text-align: start;

      @media screen and (max-width: $screen-ad) {
        margin-left: base-unit(30);
      }

      @media screen and (max-width: $screen-md) {
        margin-left: base-unit(15);
      }

      @media screen and (max-width: $screen-sm) {
        margin-left: 0;
      }
    }
  }

  &__button {
    flex-shrink: 0;
    font-size: base-unit(14);
    line-height: base-unit(19);
  }
}
</style>
