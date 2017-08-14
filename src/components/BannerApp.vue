<template>
  <div id="banner-app">
    <img class="cross" src="../assets/images/cross.svg">
    <div class="wrapper">
      <img src="../assets/images/2-iphones.png">
      <div class="right">
        <h2>{{$t('bannerapp.title')}}</h2>
        <p>Recevoir par SMS le lien de téléchargement</p>
        <input type="text" placeholder="N° de tel mobile...">
        <input type="submit" value="Envoyer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner-app',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style>
</style>
