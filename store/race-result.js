import { cloneDeep, debounce } from 'lodash'

const initialState = {
  raceResults: [],
  isLoading: false
}

export const state = () => cloneDeep(initialState)

export const getters = {
  getRaceResults(state) {
    return state.raceResults
  },
  getResultIsLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  initRaceresults(state, payload) {
    if (payload === null) {
      state = Object.assign(state, initialState)
    } else {
      state.raceResults = payload
    }
  },
  updateIsLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async fetchRaceResults({ commit }) {
    commit('updateIsLoading', true)
    const { data } = await this.$axios('raceresult')
    commit('initRaceresults', data)
    // settimeoutは、ローディングを見せたくて入れていた。
    // setTimeout(() => {
    commit('updateIsLoading', false)
    // }, 1000)
  },
  async postRaceResults({ commit, dispatch }, payload) {
    commit('updateIsLoading', true)
    console.log(payload)
    await this.$axios.post('raceresult', payload)
    dispatch('fetchRaceResults')
    commit('updateIsLoading', false)
  }
}
