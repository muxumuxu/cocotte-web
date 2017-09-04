<template>
  <div id="food-page">
    <category-header :categoryName="category.name" :showFilters="false" :categoryId="$route.params.category_id" />
    <food-details :food="food" :category="category" />
    <banner-app v-if="!userHasCloseBanner" />
    <desktop-modal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from '@/components/category/CategoryHeader'
import FoodDetails from '@/components/food/FoodDetails'
import BannerApp from '@/components/common/BannerApp'
import DesktopModal from '@/components/common/DesktopModal'

export default {
  name: 'food-page',
  components: { CategoryHeader, FoodDetails, BannerApp, DesktopModal },
  computed: {
    category () {
      const categoryId = this.$route.params.category_id
      const category = this.$store.getters.getCategoryById(categoryId)
      if (category) {
        return category
      }
      this.$router.push('/404')
    },
    food () {
      const categoryId = this.$route.params.category_id
      const foodId = this.$route.params.food_id
      const food = this.$store.getters.getFoodById(categoryId, foodId)
      if (food) {
        return food
      }
      this.$router.push('/404')
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
