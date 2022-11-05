<template>
	<view class="z-minus-box">
		<img class="bg" :src="`${STATIC_URL}/images/plane_bg.jpeg`" />
		<view class="footer" />
		<view class="content">
			<view class="font-LED">我们生来就是孤独。</view>
			<view class="text">Mr. Van Gogh</view>
		</view>
	</view>
</template>

<script>
import { STATIC_URL } from '@/utils/constant.js';
export default {
	data() {
		return {
			STATIC_URL,
		}
	}
}
</script>

<style lang="scss" scoped>
  .z-minus-box {
	  position: relative;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 100vh;
	  height: 100vh;
	  .bg {
		  position: absolute;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
		  box-shadow:inset 0px 0px 5px 5px #696969;
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
		  transform: scaleX(-1);
		  width: 80%;
		  height: 80%;
		  font-size: 100rpx;
		  font-family: PingFangSC-Medium, PingFang SC;
		  font-weight: 400;
		  color: #FFFFFF;
		  > view {
			  display: flex;
			  flex-direction: row;
		  }
	  }
	  .font-LED {
		  display: flex;
		  align-items: center;
		  // justify-content: center;
		  font-family: UniDreamLED;
	  }
	  .text {
		  position: absolute;
		  right: 0;
		  bottom: 0;
		  font-size: 50rpx;
	  }
  }
</style>
