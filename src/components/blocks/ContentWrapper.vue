<template>
  <main class="content-wrapper">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'ContentWrapper',
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: $white;
  border-radius: base-unit(8);
  overflow: hidden;
}
</style>
