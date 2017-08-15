<template>
  <div id="category-item">
    <img :src="imageSource">
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
