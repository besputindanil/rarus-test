<template>
  <header
    :class="{
      header: true,
      'header--with-button': backTo,
    }"
  >
    <arrow-button v-if="backTo" class="header__button" reverse @click="onHeaderButtonCLick">{{
      BUTTONS_TEXT.SOLUTION
    }}</arrow-button>
    <h1 class="header__title">{{ title }}</h1>
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
  justify-content: center;
  width: 100%;
  min-height: base-unit(80);
  padding: base-unit(23) base-unit(28) base-unit(17);
  background-color: $sapphire;
  border-radius: 8px;

  &--with-button {
    justify-content: start;
  }

  &__button {
    flex-shrink: 0;
  }

  &__title {
    width: 100%;
    margin: 0;
    padding: 0 base-unit(20);
    font-size: base-unit(32);
    line-height: base-unit(40);
    color: $white;
    text-align: center;
  }
}
</style>
