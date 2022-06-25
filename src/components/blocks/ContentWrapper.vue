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
  width: 100%;
  height: base-unit(702);
  background: $white;
  border-radius: base-unit(8);
}
</style>
