<template>
  <div id="landing-page">
    <landing-header />
    <banner-app />
    <category-list />
  </div>
</template>

<script>
import LandingHeader from '@/components/LandingHeader'
import BannerApp from '@/components/BannerApp'
import CategoryList from '@/components/CategoryList'

export default {
  computed: { },
  components: { LandingHeader, BannerApp, CategoryList },
  methods: {
  }
}
</script>

<style>
</style>
