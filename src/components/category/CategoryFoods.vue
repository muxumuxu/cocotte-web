<template>
  <div id="category-foods">
    <div class="wrapper">
      <food-item v-for="food in foods" :key="food.id" :food="food" :category-id="categoryId" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FoodItem from '@/components/food/FoodItem'

export default {
  name: 'category-foods',
  props: {
    categoryId: { type: String },
    filterBy: { type: String }
  },
  computed: {
    foods () {
      window.scrollTo(0, 0)
      const matchedCategories = this.categories.filter(category => category.id === this.categoryId)
      if (matchedCategories.length > 0) {
        return matchedCategories[0].foods.filter(food => {
          if (this.filterBy === 'forbidden') {
            return food.danger === 'avoid'
          } else if (this.filterBy === 'authorised') {
            return food.danger === 'empty'
          } else if (this.filterBy === 'careful') {
            return food.danger === 'care'
          }
          return true
        })
      }
      return []
    },
    ...mapGetters({ categories: 'categories' })
  },
  components: { FoodItem },
  methods: { }
}
</script>

<style>
#category-foods {
  padding-top: 190px;
	padding-bottom: 70px;
  overflow-y: auto;
}
</style>
