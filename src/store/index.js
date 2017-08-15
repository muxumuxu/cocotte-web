import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories'
import foods from './modules/foods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    foods
  }
})
