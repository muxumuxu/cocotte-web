<template>
  <div id="food-details">
    <div class="wrapper">
      <div class="flex">
        <div class="title">
          <h2>{{food.name}}</h2>
          <p :class="{ 'authorised': isAuthorized, 'careful': isCareful, 'forbidden': isForbidden }">{{displayDanger}}</p>
        </div>
        <div class="category-icon" :class="{ 'dairy' : isDairy, 'vege_fruits' : isVege_Fruits, 'fish_seafood' : isFish_Seafood, 'condiments' : isCondiments, 'drinks' : isDrinks, 'deli': isDeli, 'deserts' : isDeserts, 'carbs' : isCarbs, 'plants' : isPlants, 'cooked_food' : isCookedFood, 'meat' : isMeat }">
          <img :src="category.coverImage">
        </div>
      </div>
      <div class="flex">
        <div>
          <button v-on:click="openModal"><img src="../../assets/images/share.svg"></button>
          <a href="mailto:hello@cocotte-app.com?subject=Commentaire sur l'aliment"><img src="../../assets/images/flag.svg"></a>
        </div>
        <button class="bookmark" v-on:click="openModal">Ajouter en favoris</button>
      </div>
      <div class="info">
        <h3>{{$t('food.risk')}}</h3>
        <p>{{displayRisk}}</p>
        <h3>{{$t('food.information')}}</h3>
        <p>{{displayInfo}}</p>
        <button v-on:click="openModal">En savoir plus</button>
      </div>
      <p class="notice">{{$t('food.more.doctor')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food-details',
  props: ['food', 'category'],
  computed: {
    isDairy () {
      return this.category.id === 5
    },
    isVege_Fruits () {
      return this.category.id === 3
    },
    isFish_Seafood () {
      return this.category.id === 6
    },
    isCondiments () {
      return this.category.id === 16
    },
    isDrinks () {
      return this.category.id === 15
    },
    isDeli () {
      return this.category.id === 10
    },
    isDeserts () {
      return this.category.id === 17
    },
    isCarbs () {
      return this.category.id === 18
    },
    isPlants () {
      return this.category.id === 4
    },
    isCookedFood () {
      return this.category.id === 9
    },
    isMeat () {
      return this.category.id === 1
    },
    isMiscellanious () {
      return this.category.id === 7
    },
    isAuthorized () {
      return this.food.danger === 'empty'
    },
    isCareful () {
      return this.food.danger === 'care'
    },
    isForbidden () {
      return this.food.danger === 'avoid'
    },
    displayDanger () {
      if (this.isAuthorized) {
        return `${this.$i18n.t('food.status.authorised')}`
      } else if (this.isCareful) {
        return `${this.$i18n.t('food.status.careful')}`
      }
      return `${this.$i18n.t('food.status.forbidden')}`
    },
    displayRisk () {
      if (this.food.risk) {
        return this.food.risk.name
      }
      return `${this.$i18n.t('food.more.no_risk')}`
    },
    displayInfo () {
      if (this.food.info) {
        return this.food.info
      }
      return `${this.$i18n.t('food.more.no_info')}`
    }
  },
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

<style lang="scss">
#food-details {
  padding: 135px 0 100px;
  overflow-y: auto;
  p.notice {
    font-size: 12px;
    opacity: 0.6;
    padding-top: 25px;
  }
  .flex {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .category-icon {
      border-radius: 50px;
      width: 92px;
      height: 92px;
      display: flex;
      img {
        transform: scale(0.5);
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
    button, a {
      border: none;
      background: #F4F4F4;
      border-radius: 3px;
      cursor: pointer;
    }
    a {
      padding: 19px 20px 11px;
    }
    button {
      padding: 12px 20px;
      &.bookmark {
        background: #FF0079 url("../../assets/images/white-star.svg") no-repeat 13px 10px;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding-left: 45px;
      }
    }
    .title {
      h2 {
        color: black;
        font-size: 38px;
        font-weight: normal;
      }
      p {
        padding: 10px 0 10px 27px;
        margin-top: 5px;
        opacity: 1;
        &.authorised {
          background: url("../../assets/images/authorised.svg") no-repeat 0px 8px;
          color: #99D22A;
        }
        &.careful {
          background: url("../../assets/images/careful.svg") no-repeat 0px 9px;
          color: #FDAE00;
        }
        &.forbidden {
          background: url("../../assets/images/forbidden.svg") no-repeat 0px 8px;
          color: #F64848;
        }
      }
      img {
        border-radius: 50px;
        width: 92px;
        height: 92px;
      }
    }
  }
  .info {
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(142,142,147,0.1);
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 30px;
    }
    p {
      opacity: 0.6;
      line-height: 23px;
      margin-top: 2px;
      font-size: 18px;
    }
    button {
      border: none;
      background: transparent;
      padding: 0;
      color: #007CFF;
      text-decoration: none;
      display: block;
      margin-top: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
