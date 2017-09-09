import Vue from 'vue'
import Vuex from 'vuex'
import data from './foods.json'
import _ from 'lodash'
import { imageForCategory } from './category_helper'
import axios from 'axios'

const LOAD_FOODS = 'LOAD_FOODS'
const SET_FOODS = 'SET_FOODS'

Vue.use(Vuex)

// Helpers
const styleHyphenFormat = (name) => {
  return name.toLowerCase().replace(/&\s/g, '').replace(/\s/g, '-')
}
// Parse JSON data
// @params data : Array of foods
// [{
//   id: <food_id_1>,
//   category: { id: <category_id_1>, ... },
//   ...
// }, ...]
const dataToState = (data) => {
  var categories = data.map(food => food.category)
  categories = _.uniqWith(categories, (curr, oth) => curr.id === oth.id)
  categories = categories.sort((a, b) => a.order - b.order)
  categories.forEach(category => { // map foods to category
    category.foods = data.filter(food => food.category.id === category.id)
  })
  categories.forEach(category => { // Normalize data
    category.name = category.name.trim()
    category.serverId = category.id
    category.coverImage = imageForCategory(category) // associate the cover image (landing page)
    category.id = styleHyphenFormat(category.name) // use a named id for routing
    category.foods.forEach(food => {
      food.id = styleHyphenFormat(food.name) // use a named id for routing
      food.name = food.name.trim()
      food.categoryId = category.id
      delete food.category // Delete redundant category
    })
  })
  return categories
}

// Retrieve a category by id
const getCategoryById = (state, id) => {
  const matched = state.categories.filter(c => c.id === id)
  if (matched.length > 0) {
    return matched[0]
  }
}

const getters = {
  categories: state => state.categories,
  userHasCloseBanner: state => state.userHasCloseBanner,
  getCategoryById: (state, getters) => (id) => {
    return getCategoryById(state, id)
  },
  getFoodById: (state, getters) => (categoryId, foodId) => {
    const category = getCategoryById(state, categoryId)
    if (category) {
      const matched = category.foods.filter(f => f.id === foodId)
      if (matched.length > 0) {
        return matched[0]
      }
    }
  }
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
