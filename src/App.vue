<template>
  <div class="app">
    <router-view />
    <loader
      v-if="loading"
      object="#0096f2"
      color1="#ffffff"
      color2="#f2291f"
      size="4"
      speed="2"
      bg="#1d2335"
      opacity="80"
      name="circular"
    ></loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['loading']),
  },
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
