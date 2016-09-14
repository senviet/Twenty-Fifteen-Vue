const state = {
  title: '',
  tagline: '',
  dateFormat: 'MMMM D, YYYY'
}

const mutations = {
  'SETTING.TITLE.SET' (state, title) {
    state.title = title
  },
  'SETTING.TAGLINE.SET' (state, tagline) {
    state.tagline = tagline
  },
  'SETTING.DATE_FORMAT.SET' (state, dateFormat) {
    state.dateFormat = dateFormat
  }
}

export default {
  state,
  mutations
}
