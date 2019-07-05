import { cloneDeep, debounce } from 'lodash'

const startRacing = () => {
  this.$emit('startMusic')
  setTimeout(() => {
    this.isRacing = setInterval(this.racing, 100)
  }, 3200)
}

const raceStates = {
  0: 'ready', //過去のレースデータとレース予想投票
  1: 'racing', //レースとレース結果
  2: 'result' //予想の結果
}
const initialState = {
  raceState: raceStates[0]
}

export const state = () => cloneDeep(initialState)

export const getters = {
  getRaceState(state) {
    return state.raceState
  }
}

export const mutations = {
  initRaceState() {},
  updateRaceState(state, payload) {
    const key = Object.keys(raceStates).filter(key => {
      return raceStates[key] === payload
    })
    state.raceState = raceStates[key]
  }
  // updateRaceresults(state, [distance, ranking]) {
  //   state.runners.forEach((runner, index) => {
  //     runner.moveSpeed = Math.floor(Math.random(10) * 10) + 1
  //     if (runner.moveDistance < distance - 10) {
  //       runner.moveDistance += runner.moveSpeed
  //     } else {
  //       runner.moveDistance = distance
  //       const isFinishRunner = ranking.find(id => {
  //         return id === runner.id
  //       })
  //       if (isFinishRunner === undefined) ranking.push(runner.id)
  //     }
  //   })
  // }
}

export const actions = {
  async postRaceResults({ dispatch }, payload) {
    await this.$axios.post('raceresult', payload)
    dispatch('fetchRaceResults')
  },
  transitionRaceState({ commit }, payload) {
    commit('updateRaceState', payload)
  }
}
