<template>
  <div id="mobile-page">
    <img src="../../assets/images/logo-black.svg" class="logo">
    <img src="../../assets/images/3-iphones.jpg" class="iphones">
    <h2>{{$t('mobile_page.title')}}</h2>
    <a href="https://muxu.gift/enceinte-alimentation-app-store" target="_blank" rel="noopener">
      <img src="../../assets/images/app-store-badge-black.svg" class="badge">
    </a>
  </div>
</template>

<script>
export default {
  name: 'mobile-page',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#mobile-page {
  padding: 60px 35px;
  text-align: center;
  img {
    &.logo {
      margin: 0 auto 25px;
      display: block;
      max-width: 100%;
    }
    &.iphones {
      max-width: 100%;
    }
    &.badge {
      opacity: 1;
    }
  }
  h2 {
    margin: 25px 0;
    color: black;
  }
}
</style>
