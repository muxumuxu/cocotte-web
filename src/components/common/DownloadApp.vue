<template>
  <div id="download-app">
    <h2>{{bannerTitle}}</h2>
    <a href="https://muxu.gift/alimentation-enceinte-google-play" target="_blank" rel="noopener" class="google-play">
      <img src="../../assets/images/google-play-badge-black.svg">
    </a>
    <a href="https://muxu.gift/alimentation-enceinte-app-store" target="_blank" rel="noopener">
      <img src="../../assets/images/app-store-badge-black.svg">
    </a>
  </div>
</template>

<script>
export default {
  name: 'download-app',
  computed: { },
  components: { },
  props: ['bannerTitle'],
  methods: { }
}
</script>

<style lang="scss">
#download-app {
	margin: 20px 0 0 25px;
  h2 {
    margin-bottom: 20px;
  }
  a.google-play {
    margin-right: 10px;
  }
}
</style>
