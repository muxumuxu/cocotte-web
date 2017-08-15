<template>
  <div id="category-filters">
    <button class="all active">{{$t('category.filters.all')}}</button>
    <button class="authorised">{{$t('category.filters.authorised')}}</button>
    <button class="careful">{{$t('category.filters.careful')}}</button>
    <button class="forbidden">{{$t('category.filters.forbidden')}}</button>
  </div>
</template>

<script>
export default {
  name: 'category-filters',
  components: { },
  methods: { }
}
</script>

<style>
</style>
