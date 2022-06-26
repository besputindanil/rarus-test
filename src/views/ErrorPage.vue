<template>
  <div class="not-found" :style="imageStyle">
    <div class="not-found__container">
      <h1 class="not-found__title">Страница не найдена</h1>
      <arrow-button
        :to="{ name: 'index' }"
        class="not-found__button"
        reverse
        @click="onButtonClick"
      >
        Вернуться на главную
      </arrow-button>
    </div>
  </div>
</template>
<script>
import ArrowButton from 'components/elements/ArrowButton';

export default {
  name: 'ErrorPage',
  components: { ArrowButton },
  data() {
    return {
      imageStyle: `background-image: url(${require('image/background.jpg')})`,
    };
  },
  methods: {
    onButtonClick() {
      this.$router.push({ name: 'index' });
    },
  },
};
</script>
<style lang="scss" scoped>
.not-found {
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: $white;
    font-size: base-unit(32);
    line-height: base-unit(40);
  }

  &__button {
    margin-top: base-unit(12);
  }
}
</style>
