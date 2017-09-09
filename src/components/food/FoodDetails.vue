<template>
  <div id="food-details">
    <div class="wrapper">
      <div class="flex">
        <div class="title">
          <h2>{{food.name}}</h2>
          <p :class="{ 'authorised': isAuthorized, 'careful': isCareful, 'forbidden': isForbidden }">{{displayDanger}}</p>
        </div>
        <div class="category-icon" :style="categoryStyle">
          <img :src="category.coverImage">
        </div>
      </div>
      <div class="flex links">
        <div>
          <button v-on:click="openModal"><img src="../../assets/images/share.svg"></button>
          <a href="mailto:hello@cocotte-app.com?subject=Commentaire sur l'aliment"><img src="../../assets/images/flag.svg"></a>
        </div>
        <button class="bookmark" v-on:click="openModal">Ajouter en favoris</button>
      </div>
      <div class="more">
        <div v-if="food.risk">
          <h3>{{$t('food.risk')}}</h3>
          <p>{{displayRisk}}</p>
        </div>
        <div v-if="food.info" class="info">
          <h3>{{$t('food.information')}}</h3>
          <p>{{displayInfo}}</p>
        </div>
        <button v-on:click="openModal">En savoir plus</button>
      </div>
      <p class="notice">{{$t('food.more.doctor')}}</p>
    </div>
  </div>
</template>

<script>
import { colorForCategory } from '@/store/category_helper'

export default {
  name: 'food-details',
  props: ['food', 'category'],
  computed: {
    categoryStyle () {
      return `background: ${colorForCategory(this.category)}`
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
      return this.food.risk.name
    },
    displayInfo () {
      return this.food.info
    }
  },
  components: { },
  methods: {
    openModal () {
      const banner = document.getElementById('desktop-modal')
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
    line-height: 16px;
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
      position: relative;
      z-index: -1;
      img {
        transform: scale(0.5);
        position: relative;
        z-index: -2;
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
        margin-bottom: 5px;
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
  .links {
    margin-bottom: 30px;
  }
  .more {
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(142,142,147,0.1);
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      opacity: 0.6;
      line-height: 23px;
      margin-top: 5px;
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
  .info {
    margin-top: 30px;
  }
}
</style>
