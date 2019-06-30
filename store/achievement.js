import { cloneDeep, debounce } from 'lodash'

const initialState = {
  achievement: [],
  isLoading: false
}

export const state = () => cloneDeep(initialState)

export const getters = {
  getAchievement(state) {
    return state.achievement
  },
  getAchievementIsLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  initAchievement(state, payload) {
    if (payload === null) {
      state = Object.assign(state, initialState)
    } else {
      state.achievement = payload
    }
  },
  updateIsLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async fetchAchievement({ commit }) {
    commit('updateIsLoading', true)
    const { data } = await this.$axios('achievement')
    commit('initAchievement', data)
    setTimeout(() => {
      commit('updateIsLoading', false)
    }, 1000)
  },
  async postAchievement({ commit, dispatch }, payload) {
    commit('updateIsLoading', true)
    await this.$axios.post('achievement', payload)
    // dispatch('fetchRaceResults')
    setTimeout(() => {
      commit('updateIsLoading', false)
    }, 1000)
  }
}
