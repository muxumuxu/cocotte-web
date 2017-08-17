<template>
  <div id="food-details">
    <div class="wrapper">
      <div class="flex">
        <div class="title">
          <h2>{{food.name}}</h2>
          <p :class="{ 'authorised': isAuthorized, 'careful': isCareful, 'forbidden': isForbidden }">{{displayDanger}}</p>
        </div>
        <img :src="category.coverImage">
      </div>
      <div class="flex">
        <div>
          <a href="mailto:hello@cocotte-app.com?subject=Commentaire sur l'aliment"><img src="../../assets/images/share.svg"></a>
          <button v-on:click="openModal"><img src="../../assets/images/flag.svg"></button>
        </div>
        <button class="bookmark" v-on:click="openModal">Ajouter en favoris</button>
      </div>
      <div class="info">
        <h3>{{$t('food.risk')}}</h3>
        <p>{{displayRisk}}</p>
        <h3>{{$t('food.information')}}</h3>
        <p>{{displayInfo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food-details',
  props: ['food', 'category'],
  computed: {
    isAuthorized () {
      return this.food.danger === 'empty'
    },
    isCareful () {
      return this.food.danger === 'avoid'
    },
    isForbidden () {
      return this.food.danger === 'care'
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
  padding-top: 135px;
  overflow: scroll;
  .flex {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding-bottom: 100px;
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 30px;
    }
    p {
      opacity: 0.6;
      line-height: 23px;
      margin-top: 2px;
    }
  }
}
</style>
