<template>
  <div id="landing-page">
    <landing-header />
    <banner-app v-if="!userHasCloseBanner" />
    <category-list />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LandingHeader from '@/components/landing/LandingHeader'
import BannerApp from '@/components/common/BannerApp'
import CategoryList from '@/components/category/CategoryList'

export default {
  computed: mapGetters({ userHasCloseBanner: 'userHasCloseBanner' }),
  components: { LandingHeader, BannerApp, CategoryList }
}
</script>

<style>
</style>
