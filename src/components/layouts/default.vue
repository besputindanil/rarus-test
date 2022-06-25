<template>
  <div class="page-wrapper" :style="imageStyle">
    <div class="page-wrapper__container">
      <the-header class="page-wrapper__header" />
      <content-wrapper>
        <router-view />
      </content-wrapper>
    </div>
  </div>
</template>

<script>
import TheHeader from 'components/TheHeader';
import ContentWrapper from 'components/Blocks/ContentWrapper';
import { mapActions } from 'vuex';

export default {
  name: 'Page',
  components: { TheHeader, ContentWrapper },
  data() {
    return {
      imageStyle: `background-image: url(${require('image/background.jpg')})`,
    };
  },
  async mounted() {
    await this.getAtsList();
  },
  methods: {
    ...mapActions('ats', ['getAtsList']),
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;

  &__container {
    width: 100%;
    max-width: base-unit(1110);
    padding: 0 2vw;
  }

  &__header {
    margin-bottom: base-unit(16);
  }
}
</style>
