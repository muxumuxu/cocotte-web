<template>
  <div id="download-app">
    <h2>{{bannerTitle}}</h2>
    <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
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
