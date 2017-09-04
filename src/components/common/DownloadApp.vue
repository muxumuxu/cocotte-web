<template>
  <div id="download-app">
    <h2>{{bannerTitle}}</h2>
    <a href="https://muxu.gift/enceinte-manger-app-store" target="_blank" rel="noopener">
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
}
</style>
