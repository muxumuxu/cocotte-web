<template>
  <div id="download-modal" class="invisible">
    <button v-on:click="closeModal"><img class="cross" src="../../assets/images/black-cross.svg"></button>
    <div class="wrapper">
      <img src='../../assets/images/1-iphone.png'>
      <sms-form :formTitle="$t('modal.title')" :formSubtitle="$t('banner_app.subtitle')" />
    </div>
  </div>
</template>

<script>
import SmsForm from '@/components/common/SmsForm'
export default {
  name: 'download-modal',
  computed: { },
  components: { SmsForm },
  methods: {
    closeModal () {
      const banner = document.getElementById('download-modal')
      banner.classList.remove('visible')
      banner.classList.add('invisible')
    }
  }
}
</script>

<style lang="scss">
#download-modal {
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
		img {
			width: 166px;
			height: 302px;
		}
		#sms-form {
			margin-top: 80px;
			h2, p {
				color: black;
			}
			input[type=text] {
				background: #EFEFEF;
			}
		}
	}
}
</style>
