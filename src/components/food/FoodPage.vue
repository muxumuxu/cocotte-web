<template>
  <div id="food-page">
    <category-header :categoryName="category.name" :showFilters="false" :categoryId="parseInt($route.params.category_id)" />
    <food-details :food="food" :category="category" />
    <banner-app v-if="!userHasCloseBanner" />
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
    ...mapGetters({
      categories: 'categories',
      userHasCloseBanner: 'userHasCloseBanner'
    })
  }
}
</script>

<style lang="scss">
#food-page {
  #banner-app {
    position: fixed;
    bottom: 46px;
    width: 100%;
    padding: 20px 0;
    background: rgba(97,97,97,0.8);
  }
}
</style>
