<template>
  <div id="food-page">
    <category-header />
    <banner-app />
  </div>
</template>

<script>
import CategoryHeader from '@/components/CategoryHeader'
import BannerApp from '@/components/BannerApp'
export default {
  name: 'food-page',
  components: { CategoryHeader, BannerApp },
  methods: { }
}
</script>

<style>
</style>
