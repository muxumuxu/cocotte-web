<template>
  <div id="desktop-modal" class="invisible">
    <button v-on:click="closeModal"><img class="cross" src="../../assets/images/black-cross.svg"></button>
    <div class="wrapper">
      <img src='../../assets/images/1-iphone.png' class="iphone">
      <download-app :bannerTitle="$t('modal_desktop.title')" />
    </div>
  </div>
</template>

<script>
import DownloadApp from '@/components/common/DownloadApp'
export default {
  name: 'desktop-modal',
  computed: { },
  components: { DownloadApp },
  methods: {
    closeModal () {
      const banner = document.getElementById('desktop-modal')
      banner.classList.remove('visible')
      banner.classList.add('invisible')
    }
  }
}
</script>

<style lang="scss">
#desktop-modal {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 1000;
	top: 0;
	background: rgba(255,255,255,0.97);
	button {
		position: absolute;
		right: 14px;
		top: 17px;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	.wrapper {
		display: flex;
		margin-top: 15%;
		img.iphone {
			width: 166px;
			height: 302px;
		}
		#download-app {
			margin-top: 80px;
			h2 {
				color: black;
			}
		}
	}
}
</style>
