<template>
  <div id="category-foods">
    <div class="wrapper">
      <h1>{{$t('category.title')}} <span>Boissons</span></h1>
      <div class="filters">
        <button class="all active">{{$t('category.filters.all')}}</button>
        <button class="authorised">{{$t('category.filters.authorised')}}</button>
        <button class="careful">{{$t('category.filters.careful')}}</button>
        <button class="forbidden">{{$t('category.filters.forbidden')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'category-foods',
  computed: mapGetters({ categories: 'categories', foods: 'foods' }),
  components: { },
  methods: { }
}
</script>

<style>
</style>
