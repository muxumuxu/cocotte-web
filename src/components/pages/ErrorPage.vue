<template>
  <div id="error-page">
    <category-header :showFilters="false" :errorMessageTitle="$t('error_page.title')" />
    <div class="wrapper">
      <div class="message">
        <img src="../../assets/images/error-page.svg">
        <h2>{{$t('error_page.message')}}</h2>
        <router-link to="/"><button>Retourner à l'accueil</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from '@/components/category/CategoryHeader'

export default {
  name: 'error-page',
  computed: { },
  components: { CategoryHeader },
  methods: { }
}
</script>

<style lang="scss">
#error-page {
  .message {
    padding-top: 135px;
    img {
      padding-top: 45px;
    }
    h2 {
      color: black;
      font-size: 32px;
      width: 550px;
      line-height: 36px;
      margin-top: 20px;
      letter-spacing: -0.35px;
    }
    button {
      border: none;
      border-radius: 3px;
      cursor: pointer;
      padding: 12px 15px;
      background: #FF0079;
      color: white;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: -0.16px;
      margin-top: 20px;
      transition: opacity .3s;
    	&:hover {
    		opacity: 0.7;
    	}
    }
  }
}
</style>
