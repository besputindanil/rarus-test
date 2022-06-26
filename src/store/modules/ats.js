import { getResource, postResource } from 'js/api';
import { prepareIntegrationData } from 'js/models';
import post from 'data/post';

const GET_ATS_PATH = 'ats';
const POST_USER_ATS_PATH = 'ats-user';

const LOCAL_STORAGE_SLUG = 'ats';

export default {
  namespaced: true,
  state: {
    atsData: [],
    activeAts: null,
    atsUserData: {},
  },
  getters: {
    atsData: (state) => state.atsData,
    activeAts: (state) => state.activeAts || localStorage.getItem(LOCAL_STORAGE_SLUG),
    atsUserInfo: (state) => {
      const { model, program, solutions } = state.atsUserData;
      return { model, program, solutions };
    },
    atsUserIntegration: (state) => {
      const { telephony_integration } = state.atsUserData;
      const preparedIntegration =
        telephony_integration && prepareIntegrationData(telephony_integration);
      return preparedIntegration;
    },
  },
  mutations: {
    SET_ATS_DATA: (state, payload) => (state.atsData = payload),
    SET_ATS: (state, payload) => {
      state.activeAts = payload;
      localStorage.setItem(LOCAL_STORAGE_SLUG, payload);
    },
    CLEAR_ATS: (state) => {
      state.activeAts = null;
      localStorage.removeItem(LOCAL_STORAGE_SLUG);
    },
    SET_ATS_USER_DATA: (state, payload) => (state.atsUserData = payload),
  },
  actions: {
    getAtsList: async ({ commit, rootState }) => {
      try {
        rootState.loading = true;
        const data = await getResource(GET_ATS_PATH);
        data && commit('SET_ATS_DATA', data);
      } catch (e) {
        console.error(e);
      } finally {
        rootState.loading = false;
      }
    },
    setAts: ({ commit }, payload) => {
      commit('SET_ATS', payload);
    },
    clearAts: ({ commit }, payload) => {
      commit('CLEAR_ATS', payload);
    },
    getUserAts: async ({ getters, commit, rootState }) => {
      if (getters.activeAts) {
        try {
          rootState.loading = true;
          const model = getters.activeAts;
          const payload = { model, ...post };

          const data = await postResource(POST_USER_ATS_PATH, payload);
          data && commit('SET_ATS_USER_DATA', data);
        } catch (e) {
          console.error(e);
        } finally {
          rootState.loading = false;
        }
      }
    },
  },
};
