<template>
  <div id="category-page">
    <category-header :showFilters="true" />
    <category-foods />
    <banner-app />
  </div>
</template>

<script>
import CategoryHeader from '@/components/category/CategoryHeader'
import CategoryFoods from '@/components/category/CategoryFoods'
import BannerApp from '@/components/common/BannerApp'
export default {
  name: 'category-page',
  components: { CategoryHeader, CategoryFoods, BannerApp },
  methods: { }
}
</script>

<style>
</style>
