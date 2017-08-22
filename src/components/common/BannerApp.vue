<template>
  <div id="banner-app">
    <button v-on:click="closeBanner"><img class="cross" src="../../assets/images/white-cross.svg"></button>
    <div class="wrapper">
      <img src="../../assets/images/2-iphones.png" class="iphones">
      <download-app :bannerTitle="$t('banner_app.title')" />
    </div>
  </div>
</template>

<script>
import DownloadApp from '@/components/common/DownloadApp'
export default {
  name: 'banner-app',
  computed: { },
  components: { DownloadApp },
  methods: {
    closeBanner () {
      const banner = document.getElementById('banner-app')
      banner.classList.add('invisible')
      this.$store.commit('toggleHasClosedBanner')
    }
  }
}
</script>

<style lang="scss">
#banner-app {
	background: #616161;
	padding: 20px;
	height: 195px;
	overflow: hidden;
	position: relative;
	button {
		position: absolute;
		right: 10px;
		top: 13px;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	.wrapper {
		display: flex;
		img.iphones {
			width: 194px;
			height: 331px;
			position: relative;
			bottom: -5px;
      flex-shrink: 0;
		}
	}
}
</style>
