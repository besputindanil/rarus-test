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

export default {
  name: 'DefaultPage',
  components: { TheHeader, ContentWrapper },
  data() {
    return {
      imageStyle: `background-image: url(${require('image/background.jpg')})`,
    };
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
  background-position: center;
  background-repeat: no-repeat;

  &__container {
    width: 100%;
    max-width: base-unit(1150);
    padding: 0 base-unit(20);
  }

  &__header {
    margin-bottom: base-unit(16);
  }
}
</style>
