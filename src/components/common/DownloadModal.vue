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

<style>
</style>
