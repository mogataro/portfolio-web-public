const initialState = {
  menu: [
    {
      text: 'トップページ',
      path: '/',
      active: false
    },
    {
      text: 'カラーコード変換',
      path: '/colorcode',
      active: false
    },
    {
      text: '徒競走',
      path: '/racing',
      active: false
    }
  ]
}

export const state = () => Object.assign({}, initialState)

export const getters = {
  getMenu(state) {
    return state.menu
  },
  getTitle: state => path => {
    let title = 'タイトル'
    state.menu.forEach(item => {
      if (path === item.path || path === `${item.path}/`) {
        title = item.text
      }
    })
    return title
  }
}

export const mutations = {
  updateMenu(state, payload) {
    state.menu.forEach(item => {
      item.active = false
    })
    state.menu[payload].active = true
  },
  updateMenuActive(state, payload) {
    state.menu.forEach(item => {
      item.active = item.path === payload || `${item.path}/` === payload
    })
  }
}
export const actions = {
  pageMoving({ commit }, payload) {
    commit('pages/updateMenu', payload, { root: true })
  },
  pageRouteActive({ commit, rootState }, payload) {
    // const payload = rootState.route.path
    commit('pages/updateMenuActive', payload, { root: true })
  }
}
