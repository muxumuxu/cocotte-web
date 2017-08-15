<template>
  <div id="category-page">
    <category-header />
    <banner-app />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from '@/components/CategoryHeader'
import BannerApp from '@/components/BannerApp'
export default {
  name: 'category-page',
  computed: mapGetters({ categories: 'categories', foods: 'foods' }),
  components: { CategoryHeader, BannerApp },
  methods: { }
}
</script>

<style>
</style>
