const state = {
  articles: [],
  terms: [],
  users: []
}

const mutations = {
  'ARTICLES/ADD' (state, article) {
    const record = state.articles.find(p => p.id === article.id)
    if (!record) {
      state.articles.push(article)
    }
  },
  'TERMS/ADD' (state, term) {
    const record = state.terms.find(p => p.id === term.id)
    if (!record) {
      state.terms.push(term)
    }
  },
  'USERS/ADD' (state, user) {
    const record = state.users.find(p => p.id === user.id)
    if (!record) {
      state.users.push(user)
    }
  }
}

export default {
  state,
  mutations
}
