<template>
  <div id="app">
    <router-view />
    <landing-footer v-if="isFooterEnabled" />
  </div>
</template>

<script>
import LandingFooter from '@/components/landing/LandingFooter'
export default {
  name: 'app',
  components: { LandingFooter },
  computed: {
    isFooterEnabled () {
      const pages = ['MobilePage', 'DownloadPage']
      return pages.indexOf(this.$route.name) === -1
    }
  },
  mounted: function () {
    this.$store.dispatch('LOAD_FOODS')
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/reset.scss';
@import 'src/assets/css/common.scss';
</style>
