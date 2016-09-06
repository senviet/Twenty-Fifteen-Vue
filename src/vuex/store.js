import Vue from 'vue'
import Vuex from 'vuex'
import repository from './repository/store'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({

  modules: {
    repository
  },
  strict: debug
})
