<template>
  <div id="food-page">
    <category-header :categoryName="category.name" :showFilters="false" />
    <food-details :food="food" />
    <banner-app />
    <download-modal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from '@/components/category/CategoryHeader'
import FoodDetails from '@/components/food/FoodDetails'
import BannerApp from '@/components/common/BannerApp'
import DownloadModal from '@/components/common/DownloadModal'

export default {
  name: 'food-page',
  components: { CategoryHeader, FoodDetails, BannerApp, DownloadModal },
  computed: {
    category () {
      const categoryId = parseInt(this.$route.params.category_id)
      return this.categories.filter(cat => cat.id === categoryId)[0]
    },
    food () {
      const foodId = parseInt(this.$route.params.food_id)
      return this.category.foods.filter(food => food.id === foodId)[0]
    },
    ...mapGetters({ categories: 'categories' })
  }
}
</script>

<style lang="scss">
#food-page {
  #banner-app {
    position: fixed;
    bottom: 49px;
    width: 100%;
    padding: 20px 0;
  }
}
</style>
