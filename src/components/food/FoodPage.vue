<template>
  <div id="food-page">
    <category-header :showFilters="false" />
    <food-details />
    <banner-app />
    <download-modal />
  </div>
</template>

<script>
import CategoryHeader from '@/components/category/CategoryHeader'
import FoodDetails from '@/components/food/FoodDetails'
import BannerApp from '@/components/common/BannerApp'
import DownloadModal from '@/components/common/DownloadModal'
export default {
  name: 'food-page',
  components: { CategoryHeader, FoodDetails, BannerApp, DownloadModal },
  methods: { }
}
</script>

<style>
</style>
