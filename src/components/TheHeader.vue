<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    title() {
      const { meta } = this.$route;
      return meta?.title;
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

  &__title {
    margin: 0;
    padding: 0;
    font-size: base-unit(32);
    line-height: base-unit(40);
    color: $white;
  }
}
</style>
