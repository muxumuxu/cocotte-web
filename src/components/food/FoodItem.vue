<template>
  <div id="food-item" :class="{ 'authorised': addBackgroundAuthorisedClass, 'careful': addBackgroundCarefulClass, 'forbidden': addBackgroundForbiddenClass }">
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
      return this.food.danger === 'avoid'
    },
    addBackgroundForbiddenClass () {
      return this.food.danger === 'care'
    }
  },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#food-item {
  padding: 5px 0 5px 20px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}

.authorised {
 background: url("../../assets/images/authorised.svg") no-repeat;
}
.careful {
 background: url("../../assets/images/careful.svg") no-repeat;
}
.forbidden {
 background: url("../../assets/images/forbidden.svg") no-repeat;
}
</style>
