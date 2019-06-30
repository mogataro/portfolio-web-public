import { cloneDeep, debounce } from 'lodash'

const initialState = {
  runners: []
}

export const state = () => cloneDeep(initialState)

export const getters = {
  getRunners(state) {
    return state.runners
  },
  getRunnerName: state => id => {
    const runner = state.runners.find(runner => runner.id === id)
    if (!!runner && runner.hasOwnProperty('name')) return runner.name
    return ''
  },
  getRunnerSrc: state => id => {
    const runner = state.runners.find(runner => runner.id === id)
    if (!!runner && runner.hasOwnProperty('src')) return runner.src
    return ''
  }
}

export const mutations = {
  initRunnersData(state, payload) {
    if (payload === null) {
      state = Object.assign(state, initialState)
    } else {
      state.runners.splice(0, state.runners.length)
      payload.forEach(runner => {
        runner.moveDistance = 0
        runner.moveSpeed = 0
        state.runners.push(runner)
      })
    }
  },
  updateRunnersData(state, [distance, ranking]) {
    state.runners.forEach((runner, index) => {
      runner.moveSpeed = Math.floor(Math.random(10) * 10) + 1
      if (runner.moveDistance < distance - 10) {
        runner.moveDistance += runner.moveSpeed
      } else {
        runner.moveDistance = distance
        const isFinishRunner = ranking.find(id => {
          return id === runner.id
        })
        // ゴールしていて、かつ、まだ配列「ranking」になければ配列にrunnerのidを入れる
        if (isFinishRunner === undefined) ranking.push(runner.id)
      }
    })
  }
}

export const actions = {
  async fetchRunnersData({ commit }) {
    const { data } = await this.$axios('runners')
    commit('initRunnersData', data)
  },
  runnerMove({ commit }, payload) {
    commit('updateRunnersData', payload)
  }
}
