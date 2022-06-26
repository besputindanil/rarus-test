<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: $font-open-sans, Arial, sans-serif;
  font-size: base-unit(14);
  line-height: base-unit(22);
  font-weight: 400;
  color: $midnight-express;
}
</style>
