<template>
  <div id="category-page">
    <category-header />
    <category-foods />
    <banner-app />
  </div>
</template>

<script>
import CategoryHeader from '@/components/CategoryHeader'
import CategoryFoods from '@/components/CategoryFoods'
import BannerApp from '@/components/BannerApp'
export default {
  name: 'category-page',
  components: { CategoryHeader, CategoryFoods, BannerApp },
  methods: { }
}
</script>

<style>
</style>
