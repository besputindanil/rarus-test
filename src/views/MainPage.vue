<template>
  <section class="ats">
    <ats-block class="ats__block" />
    <arrow-button class="ats__button" block :disabled="!activeAts" @click="onAcceptButtonClick">
      {{ BUTTONS_TEXT.ACCEPT }}
    </arrow-button>
  </section>
</template>

<script>
import AtsBlock from 'components/blocks/AtsBlock';
import ArrowButton from 'components/elements/ArrowButton';
import { mapActions, mapGetters } from 'vuex';
import { BUTTONS_TEXT } from 'js/content';

export default {
  name: 'MainPage',
  components: { AtsBlock, ArrowButton },
  data() {
    return { BUTTONS_TEXT };
  },
  computed: {
    ...mapGetters('ats', ['activeAts']),
  },
  async mounted() {
    await this.getAtsList();
  },
  methods: {
    ...mapActions('ats', ['getAtsList']),
    async onAcceptButtonClick() {
      this.$router.push({ name: 'ats/2' });
    },
  },
};
</script>

<style lang="scss" scoped>
.ats {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: base-unit(32) base-unit(16) base-unit(16);
}
</style>
