<template>
  <div class="settings">
    <settings-info class="settings__info" />
    <settings-integration />
    <settings-footer class="settings__footer" />
  </div>
</template>

<script>
import SettingsInfo from 'components/blocks/SettingsInfo';
import SettingsIntegration from 'components/blocks/SettingsIntegration';
import SettingsFooter from 'components/blocks/SettingsFooter';
import { mapActions } from 'vuex';

export default {
  name: 'SettingsPage',
  components: { SettingsInfo, SettingsIntegration, SettingsFooter },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions('ats', ['getUserAts']),
    async init() {
      try {
        await this.getUserAts();
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: base-unit(24) base-unit(32) base-unit(32);

  &__info {
    margin-bottom: base-unit(26);
  }

  &__footer {
    margin-top: base-unit(24);
  }
}
</style>
