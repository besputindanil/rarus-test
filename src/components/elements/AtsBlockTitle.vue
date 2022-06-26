<template>
  <h2 class="ats-block-title">
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'AtsBlockTitle',
};
</script>

<style lang="scss" scoped>
.ats-block-title {
  padding: 4px 4px 4px 12px;
  font-family: $font-verdana;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #0096f2;
}
</style>
