<template>
  <div id="banner-app">
    <button v-on:click="closeBanner"><img class="cross" src="../../assets/images/white-cross.svg"></button>
    <div class="wrapper">
      <img src="../../assets/images/2-iphones.png">
      <sms-form :formTitle="$t('banner_app.title')" :formSubtitle="$t('banner_app.subtitle')" />
    </div>
  </div>
</template>

<script>
import SmsForm from '@/components/common/SmsForm'
export default {
  name: 'banner-app',
  computed: { },
  components: { SmsForm },
  methods: {
    closeBanner () {
      const banner = document.getElementById('banner-app')
      banner.classList.add('invisible')
    }
  }
}
</script>

<style>
</style>
