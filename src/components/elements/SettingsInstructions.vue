<template>
  <div class="settings-instructions">
    <settings-title class="settings-instructions__title">{{ INSTRUCTIONS_TITLE }}</settings-title>
    <ul class="settings-instructions__list">
      <li v-for="(link, i) in INSTRUCTIONS_LINKS" :key="i" class="settings-instructions__item">
        <settings-instructions-link :name="link.NAME" :href="link.HREF" />
      </li>
    </ul>
  </div>
</template>

<script>
import SettingsTitle from 'components/elements/SettingsTitle';
import SettingsInstructionsLink from 'components/elements/SettingsInstructionsLink';
import { INSTRUCTIONS_TITLE, INSTRUCTIONS_LINKS } from 'js/content';

export default {
  name: 'SettingsInstructions',
  components: { SettingsTitle, SettingsInstructionsLink },
  data() {
    return {
      INSTRUCTIONS_TITLE,
      INSTRUCTIONS_LINKS,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings-instructions {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: base-unit(12);
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: base-unit(12);
    }
  }
}
</style>
