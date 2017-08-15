<template>
  <div id="food-details">
    <div class="wrapper">
      <button v-on:click="openModal">Ajouter en favoris</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food-details',
  computed: { },
  components: { },
  methods: {
    openModal () {
      const banner = document.getElementById('download-modal')
      banner.classList.remove('invisible')
      banner.classList.add('visible')
    }
  }
}
</script>

<style>
</style>
