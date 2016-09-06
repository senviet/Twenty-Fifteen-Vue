const state = {
  title: '',
  tagline: ''
}

const mutations = {
  'SETTING.TITLE.SET' (state, title) {
    state.title = title
  },
  'SETTING.TAGLINE.SET' (state, tagline) {
    state.tagline = tagline
  }
}

export default {
  state,
  mutations
}
