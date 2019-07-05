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
  updateAchievementIsLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async fetchAchievement({ commit }) {
    commit('updateAchievementIsLoading', true)
    const { data } = await this.$axios('achievement').catch(e => {
      null
    })
    commit('initAchievement', data)
    commit('updateAchievementIsLoading', false)
  },
  async postAchievement({ commit, dispatch }, payload) {
    commit('updateAchievementIsLoading', true)
    await this.$axios.post('achievement', payload)
    setTimeout(() => {
      commit('updateAchievementIsLoading', false)
    }, 1000)
  }
}
