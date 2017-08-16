<template>
  <div id="landing-footer">
    <nav>
      <router-link to="/about">{{$t('footer.about')}}</router-link>
      <a href="https://www.muxumuxu.com">{{$t('footer.press')}}</a>
      <a href="mailto:cocotte@muxumuxu.com">{{$t('footer.team')}}</a>
      <div class="social">
        <a href="https://www.facebook.com/CocotteApp/" target="_blank"><img src="../../assets/images/facebook-icon.svg"></a>
        <a href="https://www.instagram.com/cocotteapp/" target="_blank"><img src="../../assets/images/instagram-icon.svg"></a>
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

<style lang="scss">
#landing-footer {
	background: #D8D8D8;
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
			&:hover {
				border-bottom: 1px solid #FF0079;
			}
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
			&:hover {
				border-bottom: 1px solid #FF0079;
			}
		}
		.social {
			margin-left: 10px;
		}
	}
}
</style>
