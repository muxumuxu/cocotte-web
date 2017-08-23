<template>
  <div id="about-page">
    <category-header :showFilters="false" :categoryHeaderTitle="$t('about.title')" />
    <div class="wrapper">
      <div class="content">
        <h3>{{$t('about.why.title')}}</h3>
        <p>{{$t('about.why.description_1')}}</p>
        <br>
        <p>{{$t('about.why.description_2')}}</p>
        <br>
        <p>{{$t('about.why.description_3')}}</p>
        <h3 class="team">{{$t('about.team.title')}}</h3>
        <p>{{$t('about.team.description')}}</p>
        <img src="../../assets/images/team.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from '@/components/category/CategoryHeader'

export default {
  name: 'about-page',
  computed: { },
  components: { CategoryHeader },
  methods: { }
}
</script>

<style lang="scss">
#about-page {
  padding-bottom: 70px;
  .content {
    padding-top: 135px;
    position: relative;
    z-index: -1;
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
      &.team {
        margin-top: 40px;
      }
    }
    p {
      opacity: 0.6;
      line-height: 23px;
      margin-top: 5px;
      font-size: 18px;
    }
    img {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
