<template>
  <div id="banner-app">
    <button v-on:click="closeBanner"><img class="cross" src="../../assets/images/cross.svg"></button>
    <div class="wrapper">
      <img src="../../assets/images/2-iphones.png">
      <div class="right">
        <h2>{{$t('banner_app.title')}}</h2>
        <p>{{$t('banner_app.get_app')}}</p>
        <input type="text" :placeholder="$t('banner_app.form.input_text')">
        <input type="submit" :value="$t('banner_app.form.input_submit')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner-app',
  computed: { },
  components: { },
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
