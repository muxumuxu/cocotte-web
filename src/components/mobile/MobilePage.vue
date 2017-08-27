<template>
  <div id="mobile-page">
    <img src="../../assets/images/logo-black.svg" class="logo">
    <img src="../../assets/images/3-iphones.png">
    <h2>{{$t('mobile_page.title')}}</h2>
    <img src="../../assets/images/app-store-badge-black.svg">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 35px;
  text-align: center;
  img.logo {
    margin-bottom: 25px;
  }
  h2 {
    margin: 25px 0;
    color: black;
  }
}
</style>
