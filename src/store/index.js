import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  foods: [],
  search: '',
  searchResults: []
}

const mutations = {}

export default new Vuex.Store({
  state,
  mutations
})
