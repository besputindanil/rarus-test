<template>
  <section ref="settingsContainer" class="settings-info">
    <div class="settings-info__item">
      <settings-title>{{ SETTINGS_INFO_TITLE.MODEL }}</settings-title>
      <v-popover placement="bottom-start">
        <collapse-button>
          <p class="settings-info__description">{{ model }}</p>
        </collapse-button>
        <template slot="popover">
          <div class="settings-info__popover">
            <ats-block is-popover />
          </div>
        </template>
      </v-popover>
    </div>
    <div class="settings-info__item">
      <settings-title>{{ SETTINGS_INFO_TITLE.PROGRAM }}</settings-title>
      <p class="settings-info__description">{{ program }}</p>
    </div>
    <div class="settings-info__item">
      <settings-title>{{ SETTINGS_INFO_TITLE.SOLUTIONS }}</settings-title>
      <p class="settings-info__description">{{ solutions }}</p>
    </div>
  </section>
</template>

<script>
import SettingsTitle from 'components/elements/SettingsTitle';
import CollapseButton from 'components/elements/CollapseButton';
import AtsBlock from 'components/blocks/AtsBlock';
import { SETTINGS_INFO_TITLE } from 'js/content';
import { mapGetters } from 'vuex';

export default {
  name: 'SettingsInfo',
  components: { CollapseButton, AtsBlock, SettingsTitle },
  data() {
    return {
      SETTINGS_INFO_TITLE,
    };
  },
  computed: {
    ...mapGetters('ats', ['atsUserInfo']),
    model() {
      return this.atsUserInfo?.model;
    },
    program() {
      return this.atsUserInfo?.program;
    },
    solutions() {
      return this.atsUserInfo?.solutions;
    },
  },
};
</script>

<style lang="scss">
.tooltip {
  z-index: 10000;
  width: base-unit(1000);

  margin-top: base-unit(5);
  margin-left: base-unit(-15);

  @media screen and (max-width: $screen-ad) {
    width: 90vw;
  }

  .tooltip-inner {
    height: base-unit(630);
    padding: base-unit(24);
    background-color: $white;
    border-radius: base-unit(12);
    box-sizing: border-box;
    filter: drop-shadow(0 base-unit(8) base-unit(40) rgba(14, 38, 100, 0.32));
    overflow-y: auto;
  }

  .tooltip-arrow {
    position: absolute;
    top: base-unit(-5);
    left: calc(50% - 50px);
    z-index: 1;
    border-color: $white;
    border-width: 0 base-unit(5) base-unit(5) base-unit(5);
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-style: solid;
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>

<style lang="scss" scoped>
.settings-info {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: center;
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: base-unit(10);
    }

    @media screen and (max-width: $screen-xs) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__description {
    margin-left: base-unit(6);

    @media screen and (max-width: $screen-xs) {
      margin-left: base-unit(0);
    }
  }
}
</style>
