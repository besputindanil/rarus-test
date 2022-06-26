import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ats from 'store/modules/ats';

export default new Vuex.Store({
  modules: {
    ats,
  },
});
