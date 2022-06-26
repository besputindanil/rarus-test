import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ats from 'store/modules/ats';

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    loading: (state) => state.loading,
  },
  modules: {
    ats,
  },
});
