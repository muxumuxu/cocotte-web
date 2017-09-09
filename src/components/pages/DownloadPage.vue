<template>
  <div id="download-page">
    <img src="../../assets/images/logo-black.svg" class="logo">
    <img src="../../assets/images/3-iphones.jpg" class="iphones">
    <h2>{{$t('download_page.title')}}</h2>
    <a href="https://muxu.gift/enceinte-manger-app-store" target="_blank" rel="noopener">
      <img src="../../assets/images/app-store-badge-black.svg" class="badge">
    </a>
    <a href="https://muxu.gift/enceinte-manger-google-play" target="_blank" rel="noopener" class="google-play">
      <img src="../../assets/images/google-play-badge-black.svg">
    </a>
  </div>
</template>

<script>
export default {
  name: 'download-page',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#download-page {
  padding: 60px 35px;
  text-align: center;
  img {
    &.logo {
      margin: 0 auto 25px;
      display: block;
      max-width: 100%;
    }
    &.iphones {
      width: 307px;
    }
    &.badge {
      opacity: 1;
    }
  }
  h2 {
    margin: 25px 0;
    color: black;
  }
  a {
    display: block;
    &.google-play {
      margin-top: 10px;
    }
  }
}
</style>
