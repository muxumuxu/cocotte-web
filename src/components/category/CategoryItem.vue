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

<style lang="scss">
#category-item {
  h3 {
  	font-size: 13px;
  	color: #8E8E93;
  	font-weight: bold;
  	line-height: 15px;
  }
}
</style>
