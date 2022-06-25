<template>
  <h2 v-if="title" class="ats-block-title">{{ title }}</h2>
</template>

<script>

export default {
  name: "AtsBlockTitle",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
}
</script>

<style lang="scss" scoped>
.ats-block-title {
  padding: 4px 4px 4px 12px;
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #0096F2;
}
</style>