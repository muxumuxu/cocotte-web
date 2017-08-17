<template>
  <div id="category-foods">
    <div class="wrapper">
      <food-item v-for="food in foods" :key="food.id" :food="food" :categoryId="categoryId" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FoodItem from '@/components/food/FoodItem'

export default {
  name: 'category-foods',
  props: ['categoryId'],
  computed: {
    foods () {
      const categories = this.categories.filter(category => category.id === parseInt(this.categoryId))
      if (categories.length > 0) {
        return categories[0].foods
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
