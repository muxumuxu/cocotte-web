<template>
  <div id="about-page">
    <category-header :showFilters="false" :categoryHeaderTitle="$t('about.title')" />
    <div class="wrapper">
      <div class="content">
        <p>{{$t('about.why.description_1')}}</p>
        <p>{{$t('about.why.description_2')}}</p>
        <p>{{$t('about.why.description_3')}}</p>
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
    padding-top: 145px;
    position: relative;
    z-index: -1;
    p {
      opacity: 0.6;
      line-height: 23px;
      margin-top: 20px;
      font-size: 18px;
    }
    img {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
