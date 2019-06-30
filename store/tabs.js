import { cloneDeep } from 'lodash'

const initialState = {
  tabs: [
    {
      label: 'プロフィール',
      isActive: true
    },
    {
      label: 'スキル',
      isActive: false
    },
    {
      label: '個人開発',
      isActive: false
    },
    {
      label: '業務開発',
      isActive: false
    }
  ]
}

export const state = () => cloneDeep(initialState)

export const getters = {
  getTabs(state) {
    return state.tabs
  }
}

export const mutations = {
  updateTabs(state, payload) {
    if (payload === null) {
      state = Object.assign(state, initialState)
    } else {
      state.tabs = initialState.tabs.map((tab, index) => {
        if (index === payload) {
          return {
            label: tab.label,
            isActive: true
          }
        } else {
          return {
            label: tab.label,
            isActive: false
          }
        }
      })
    }
  }
}

export const actions = {
  selectTabs({ commit }, payload) {
    commit('updateTabs', payload)
  }
}
