import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  callingAPI: false,
  searching: '',
  user: null,
  token: null,
  domain: ''
}

const mutations = {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_DOMAIN (state, domain) {
    state.domain = domain
  }
}

export default new Vuex.Store({
  state,
  mutations
})
