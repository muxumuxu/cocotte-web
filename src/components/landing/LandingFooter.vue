<template>
  <div id="landing-footer">
    <nav>
      <router-link to="/about">{{$t('footer.about')}}</router-link>
      <a href="https://www.dropbox.com/sh/w8n3d9dbs5li0zh/AADqT2FKSrC3KiEQlhL1ulzHa?dl=0" target="_blank">{{$t('footer.press')}}</a>
      <a href="mailto:bonjour@cocotte-app.com">{{$t('footer.team')}}</a>
      <div class="social">
        <a href="https://www.facebook.com/CocotteApp/" target="_blank"><img src="../../assets/images/facebook-icon.svg"></a>
        <a href="https://www.instagram.com/cocotteapp/" target="_blank"><img src="../../assets/images/instagram-icon.svg"></a>
      </div>
    </nav>
    <p>{{$t('footer.with_love')}}</p>
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

<style lang="scss">
#landing-footer {
	background: #F7F7F7;
	padding: 15px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	p {
		color: #8E8E93;
		font-size: 13px;
		padding-right: 20px;
		a {
			text-decoration: none;
			font-weight: bold;
			color: #8E8E93;
		}
	}
	nav {
		display: flex;
		align-items: center;
		padding-left: 20px;
		a {
			text-decoration: none;
			color: #8E8E93;
			font-size: 13px;
			font-weight: bold;
			margin-right: 10px;
      display: flex;
		}
		.social {
			margin-left: 10px;
      display: flex;
		}
	}
}
</style>
