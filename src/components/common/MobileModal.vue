<template>
  <div id="mobile-modal" class="invisible">
    <img src="../../assets/images/logo-black.svg" class="logo">
    <h2>{{$t('modal_mobile.title')}}</h2>
    <img src="../../assets/images/app-store-badge-black.svg">
  </div>
</template>

<script>
export default {
  name: 'mobile-modal',
  computed: { },
  components: { },
  methods: { }
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
  padding: 60px 35px;
  img.logo {
    width: 100%;
  }
  h2 {
    margin: 25px 0;
  }
}
</style>
