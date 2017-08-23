<template>
  <div id="food-item" :class="{ 'background-authorised': addBackgroundAuthorisedClass, 'background-careful': addBackgroundCarefulClass, 'background-forbidden': addBackgroundForbiddenClass }">
    <router-link :to="`/categories/${categoryId}/foods/${food.id}`">{{ food.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'food-item',
  props: ['food', 'categoryId'],
  computed: {
    addBackgroundAuthorisedClass () {
      return this.food.danger === 'empty'
    },
    addBackgroundCarefulClass () {
      return this.food.danger === 'care'
    },
    addBackgroundForbiddenClass () {
      return this.food.danger === 'avoid'
    }
  },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#food-item {
  padding: 10px 0 10px 27px;
  margin-left: 11px;
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
}
.background-authorised {
 background: url("../../assets/images/authorised.svg") no-repeat 0px 9px;
}
.background-careful {
 background: url("../../assets/images/careful.svg") no-repeat 0px 10px;
}
.background-forbidden {
 background: url("../../assets/images/forbidden.svg") no-repeat 0px 9px;
}
</style>
