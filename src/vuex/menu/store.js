const state = {
  mainMenuItems: [],
  socialMenuItems: []
}

const mutations = {
  'MENU.MAIN.ITEMS.SET' (state, items) {
    state.mainMenuItems = items
  },
  'MENU.SOCIAL.ITEMS.SET' (state, items) {
    state.socialMenuItems = items
  }
}

export default {
  state,
  mutations
}
