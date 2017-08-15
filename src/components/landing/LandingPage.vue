<template>
  <div id="landing-page">
    <landing-header />
    <banner-app />
    <category-list />
  </div>
</template>

<script>
import LandingHeader from '@/components/landing/LandingHeader'
import BannerApp from '@/components/common/BannerApp'
import CategoryList from '@/components/category/CategoryList'

export default {
  computed: { },
  components: { LandingHeader, BannerApp, CategoryList },
  methods: {
  }
}
</script>

<style>
</style>
