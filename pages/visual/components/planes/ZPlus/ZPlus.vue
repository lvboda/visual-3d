<template>
	<view class="z-plus-box">
		<img class="bg" :src="`${STATIC_URL}/images/plane_bg.jpeg`" />
		<view class="footer" />
		<view class="content">
		    <Heart :isDynamicEffect="isDynamicEffect"/>
		</view>
		<button style="margin-top: 20rpx;" @click="onDynamicEffectClick"> {{isDynamicEffect ? '停止' : '跳动'}}</button>
	</view>
</template>

<script>
	import { STATIC_URL } from '@/utils/constant.js';
	import PhotoFrame from '@/components/PhotoFrame/PhotoFrame.nvue';
	import Heart from '@/components/Heart/Heart.nvue';
	export default {
		components: {
		  PhotoFrame,
		  Heart,
		},
		data() {
			return {
				isDynamicEffect: false,
				STATIC_URL,
			}
		},
		methods: {
			onDynamicEffectClick() {
				this.isDynamicEffect = !this.isDynamicEffect;
			},
		}
	}
</script>

<style lang="scss" scoped>
  .z-plus-box {
	  position: relative;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  transform: scaleX(-1);
	  width: 100vh;
	  height: 100vh;
	  .bg {
		  position: absolute;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
	  }
	  .footer {
		  position: absolute;
		  bottom: 0;
		  width: 100vh;
		  height: 2vh;
		  border-left: 1vh solid #a0522d;
		  border-right: 1vh solid #a0522d;
		  background: linear-gradient( 	#cd853f	 , #8b4513 );
	  }
	  .content {
		  width: 80vh;
		  height: 80vh;
		  background-color: #FFFFFF;
		  box-shadow:inset 0px 0px 10px 2px black;
	  }
  }
</style>
