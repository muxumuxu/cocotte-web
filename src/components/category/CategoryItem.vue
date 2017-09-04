<template>
  <div id="category-item">
    <div class="category-icon" :class="{ 'dairy' : isDairy, 'vege_fruits' : isVege_Fruits, 'fish_seafood' : isFish_Seafood, 'condiments' : isCondiments, 'drinks' : isDrinks, 'deli': isDeli, 'deserts' : isDeserts, 'carbs' : isCarbs, 'plants' : isPlants, 'cooked_food' : isCookedFood, 'meat' : isMeat }">
      <img :src="category.coverImage">
    </div>
    <h3>{{ category.name }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'category-item',
  props: ['category'],
  computed: {
    ...mapGetters({ categories: 'categories' }),
    isDairy () {
      return this.category.serverId === 5
    },
    isVege_Fruits () {
      return this.category.serverId === 3
    },
    isFish_Seafood () {
      return this.category.serverId === 6
    },
    isCondiments () {
      return this.category.serverId === 16
    },
    isDrinks () {
      return this.category.serverId === 15
    },
    isDeli () {
      return this.category.serverId === 10
    },
    isDeserts () {
      return this.category.serverId === 17
    },
    isCarbs () {
      return this.category.serverId === 18
    },
    isPlants () {
      return this.category.serverId === 4
    },
    isCookedFood () {
      return this.category.serverId === 9
    },
    isMeat () {
      return this.category.serverId === 1
    },
    isMiscellanious () {
      return this.category.serverId === 7
    }
  },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#category-item {
  .category-icon {
    width: 105px;
    height: 128px;
    border-radius: 6px;
    margin-bottom: 5px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
    text-align: center;
    position: relative;
    img {
      position: absolute;
      bottom: 13px;
      left: 8px;
    }
    &:hover {
      animation: pulse .5s linear;
      @keyframes pulse {
        from {
          transform: scale3d(1, 1, 1);
        }

        50% {
          transform: scale3d(1.03, 1.03, 1.03);
        }

        to {
          transform: scale3d(1, 1, 1);
        }
      }
    }
    &.dairy {
      background: #484291;
    },
    &.vege_fruits {
      background: #FFDA3A;
    }
    &.fish_seafood {
      background: #007CFF;
    },
    &.condiments {
      background: #9F57B6;
    },
    &.drinks {
      background: #99D22A;
    },
    &.deli {
      background: #FFDA3A;
    },
    &.deserts {
      background: #99D22A;
    },
    &.carbs {
      background: #484291;
    },
    &.plants {
      background: #FFDA3A;
    },
    &.cooked_food {
      background: #9F57B6;
    },
    &.meat {
      background: #FFDA3A;
    },
    &.miscellanious {
      background: #99D22A;
    }
  }
  h3 {
  	font-size: 13px;
  	color: #8E8E93;
  	font-weight: bold;
  	line-height: 15px;
  }
}
</style>
