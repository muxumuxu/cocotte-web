<template>
  <div id="category-list">
    <div class="wrapper">
      <router-link v-for="category in categories" :key="category.id" :to="`/categories/${category.id}`"><category-item class="item" :key="category.name" :imageSource="categoryIcon(category)" :categoryTitle="category.name" /></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryItem from '@/components/CategoryItem'
import DairyImage from '@/assets/images/dairy.svg'
import FruitsVegeImage from '@/assets/images/fruits_vege.svg'
import FishSeafoodImage from '@/assets/images/fish_seafood.svg'
import CondimentsImage from '@/assets/images/condiments.svg'
import DrinksImage from '@/assets/images/drinks.svg'
import DeliImage from '@/assets/images/deli.svg'
import DesertsImage from '@/assets/images/deserts.svg'
import CarbsImage from '@/assets/images/carbs.svg'
import MiscellaniousImage from '@/assets/images/miscellaneous.svg'
import MeatImage from '@/assets/images/meat.svg'
import CookedFoodImage from '@/assets/images/cooked_food.svg'
import PlantsImage from '@/assets/images/plants.svg'

export default {
  name: 'category-list',
  computed: mapGetters({ categories: 'categories' }),
  components: { CategoryItem },
  methods: {
    categoryIcon (category) {
      if (category.name === 'Oeufs & Laitages') {
        return DairyImage
      } else if (category.name === 'Fruits & Légumes') {
        return FruitsVegeImage
      } else if (category.name === 'Poissons & Fruits de mer') {
        return FishSeafoodImage
      } else if (category.name === 'Condiments') {
        return CondimentsImage
      } else if (category.name === 'Boissons') {
        return DrinksImage
      } else if (category.name === 'Charcuterie') {
        return DeliImage
      } else if (category.name === 'Desserts') {
        return DesertsImage
      } else if (category.name === 'Féculents') {
        return CarbsImage
      } else if (category.name === 'Divers') {
        return MiscellaniousImage
      } else if (category.name === 'Viandes') {
        return MeatImage
      } else if (category.name === 'Plats cuisinés') {
        return CookedFoodImage
      }
      return PlantsImage
    }
  }
}
</script>

<style>
</style>
