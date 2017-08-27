import Vue from 'vue'
import Vuex from 'vuex'
import data from './foods.json'
import _ from 'lodash'
import imageForCategory from './category_helper'
import axios from 'axios'

const LOAD_FOODS = 'LOAD_FOODS'
const SET_FOODS = 'SET_FOODS'

Vue.use(Vuex)

// Transform raw data from server to data that can be used in the app
const dataToState = (data) => {
  const categories = data.map(json => json.category)
  const uniq = _.uniqWith(categories, (curr, oth) => curr.id === oth.id)
  const sorted = uniq.sort((a, b) => a.order - b.order)
  sorted.forEach(category => {
    // map foods to category
    category.foods = data.filter(food => food.category.id === category.id)
  })
  sorted.forEach(category => {
    // associate the correct image
    category.coverImage = imageForCategory(category)
    // Delete redundant category
    category.foods.forEach(food => {
      food.categoryId = food.category.id
      delete food.category
    })
  })
  return sorted
}

const getters = {
  categories: state => state.categories,
  userHasCloseBanner: state => state.userHasCloseBanner
}

const mutations = {
  toggleHasClosedBanner: (state) => {
    state.userHasCloseBanner = true
  },
  [SET_FOODS]: (state, foods) => {
    state.categories = dataToState(foods)
  }
}

const actions = {
  [LOAD_FOODS]: ({ commit }) => {
    axios.get('https://pregnant-foods.herokuapp.com/foods.json').then(res => {
      commit(SET_FOODS, res.data)
    })
  }
}

const state = {
  categories: dataToState(data),
  userHasCloseBanner: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
