import { getResource } from "js/api";

export default {
  namespaced: true,
  state: {
    atsData: [],
    activeAts: null
  },
  getters: {
    atsData: (state) => state.atsData,
    activeAtsId: (state) => state.activeAts?.id,
    hasActiveAts: (state) => !!state.activeAts
  },
  mutations: {
    SET_ATS_DATA: (state, payload) => state.atsData = payload,
    SET_ATS: (state, payload) => state.activeAts = payload,
    CLEAR_ATS: (state) => state.activeAts = null,
  },
  actions: {
    getAtsList: async ({ commit }) => {
      const data = await getResource('ats')
      data && commit('SET_ATS_DATA', data);
    },
    setAts: ({ commit }, payload) => {
      commit('SET_ATS', payload)
    },
    clearAts: ({ commit }, payload) => {
      commit('CLEAR_ATS', payload)
    }
  }

};