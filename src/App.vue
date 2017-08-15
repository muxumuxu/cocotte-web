<template>
  <div id="app">
    <router-view />
    <landing-footer />
  </div>
</template>

<script>
import LandingFooter from '@/components/landing/LandingFooter'
export default {
  name: 'app',
  components: { LandingFooter }
}
</script>

<style lang="scss">
@import 'src/assets/css/reset.scss';
@import 'src/assets/css/layout.scss';
</style>
