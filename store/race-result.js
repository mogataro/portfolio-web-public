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
    const { data } = await this.$axios('raceresult').catch(e => {
      null
    })
    console.log(data)
    commit('initRaceresults', data)
    commit('updateIsLoading', false)
  },
  async postRaceResults({ commit, dispatch }, payload) {
    commit('updateIsLoading', true)
    await this.$axios.post('raceresult', payload)
    dispatch('fetchRaceResults')
    commit('updateIsLoading', false)
  }
}
