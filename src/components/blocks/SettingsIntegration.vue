<template>
  <section class="settings-integration">
    <div class="settings-integration__header">
      <h2 class="settings-integration__title">{{ INTEGRATION_TITLE }}</h2>
    </div>
    <div class="settings-integration__content">
      <settings-integration-item :integration-features="supportedFeatures" />
      <settings-integration-item :integration-features="unSupportedFeatures" not-supported />
    </div>
  </section>
</template>

<script>
import SettingsIntegrationItem from 'components/elements/SettingsIntegrationItem';
import { mapGetters } from 'vuex';
import { INTEGRATION_TITLE } from 'js/content';

export default {
  name: 'SettingsIntegration',
  components: { SettingsIntegrationItem },
  data() {
    return { INTEGRATION_TITLE };
  },
  computed: {
    ...mapGetters('ats', ['atsUserIntegration']),
    supportedFeatures() {
      return this.atsUserIntegration?.supportedFeatures;
    },
    unSupportedFeatures() {
      return this.atsUserIntegration?.unSupportedFeatures;
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-integration {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: base-unit(48);
    margin-bottom: base-unit(24);
    padding: base-unit(12);
    color: $raven;
    font-weight: 600;
    background-color: $white-smoke;
    border-radius: base-unit(8);
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: base-unit(20);
  }
}
</style>
