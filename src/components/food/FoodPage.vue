<template>
  <div id="food-page">
    <category-header :showFilters="false" />
    <food-details />
    <banner-app />
  </div>
</template>

<script>
import CategoryHeader from '@/components/category/CategoryHeader'
import FoodDetails from '@/components/food/FoodDetails'
import BannerApp from '@/components/common/BannerApp'
export default {
  name: 'food-page',
  components: { CategoryHeader, FoodDetails, BannerApp },
  methods: { }
}
</script>

<style>
</style>
