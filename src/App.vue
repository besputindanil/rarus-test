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
  font-family: $font-open-sans;
  font-weight: 400;
  font-size: base-unit(1);
  color: $midnight-express;
}
</style>
