<template>
  <div class="settings-integration-item">
    <settings-title
      :red="notSupported"
      :green="!notSupported"
      class="settings-integration-item__title"
      >{{ title }}</settings-title
    >
    <ul class="settings-integration-features features-list">
      <li v-for="(feature, index) in integrationFeatures" :key="index" class="features-list__item">
        <settings-integration-item-feature :not-supported="notSupported">
          {{ feature }}
        </settings-integration-item-feature>
      </li>
    </ul>
  </div>
</template>

<script>
import SettingsTitle from 'components/elements/SettingsTitle';
import SettingsIntegrationItemFeature from 'components/elements/SettingsIntegrationItemFeature';
import { INTEGRATION_FEATURES_TITLE } from 'js/content';

export default {
  name: 'SettingsIntegrationItem',
  components: { SettingsTitle, SettingsIntegrationItemFeature },
  props: {
    integrationFeatures: {
      type: Array,
      default: () => [],
    },
    notSupported: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title() {
      return this.notSupported
        ? INTEGRATION_FEATURES_TITLE.NOT_SUPPORTED
        : INTEGRATION_FEATURES_TITLE.SUPPORTED;
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-integration-item {
  padding-bottom: base-unit(32);

  &__title {
    margin-bottom: base-unit(16);
  }

  .features-list {
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: base-unit(12);
      }
    }
  }
}
</style>
