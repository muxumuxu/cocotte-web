<template>
  <div id="category-item">
    <img v-if="imageSource" :src="imageSource">
    <h3>{{categoryTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: 'category-item',
  props: ['imageSource', 'categoryTitle'],
  computed: { },
  components: { },
  methods: { }
}
</script>

<style>
</style>
