import Vue from 'vue'
import Vuex from 'vuex'
import data from './foods.json'
import _ from 'lodash'
import imageForCategory from './category_helper'

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
    category.foods.forEach(food => delete food.category)
  })
  return { categories: sorted, userHasCloseBanner: false }
}

const getters = {
  categories: state => state.categories,
  userHasCloseBanner: state => state.userHasCloseBanner
}

const mutations = {
  toggleHasClosedBanner: (state) => {
    state.userHasCloseBanner = true
  }
}

const state = dataToState(data)

export default new Vuex.Store({
  state,
  getters,
  mutations
})
