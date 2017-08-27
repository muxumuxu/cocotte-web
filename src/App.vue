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
      return this.$route.name !== 'MobilePage'
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/reset.scss';
@import 'src/assets/css/common.scss';
</style>
