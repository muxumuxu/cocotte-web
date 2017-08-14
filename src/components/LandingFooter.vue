<template>
  <div id="landing-footer">
    <nav>
      <router-link to="/about">{{$t('footer.about')}}</router-link>
      <a href="https://www.muxumuxu.com">{{$t('footer.press')}}</a>
      <a href="mailto:cocotte@muxumuxu.com">{{$t('footer.team')}}</a>
      <div class="social">
        <a href="https://www.facebook.com/CocotteApp/" target="_blank"><img src="../assets/images/facebook-icon.svg"></a>
        <a href="https://www.instagram.com/cocotteapp/" target="_blank"><img src="../assets/images/instagram-icon.svg"></a>
      </div>
    </nav>
    <p>{{$t('footer.with_love')}}<a href="https://www.muxumuxu.com" target="_blank">{{$t('footer.muxu')}}</a></p>
  </div>
</template>

<script>
export default {
  name: 'landing-footer',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style>
</style>
