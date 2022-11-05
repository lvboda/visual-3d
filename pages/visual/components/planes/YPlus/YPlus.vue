<template>
	<view class="y-plus-box">
		<view class="light" :style="{left: '150rpx', top: '150rpx'}" />
		<view class="light" :style="{right: '150rpx', top: '150rpx'}" />
		<view class="light" :style="{left: '150rpx', bottom: '150rpx'}" />
		<view class="light" :style="{right: '150rpx', bottom: '150rpx'}" />
		<view class="content">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  .y-plus-box {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 100vh;
	  height: 100vh;
	  background-color: #dcdcdc;
	  background-size: 100% 100%;
	  box-shadow:inset 0px 0px 5px 2px #696969;
	  @keyframes scale{
	  	0%{transform:scale(1)}
	  	50%,75%{transform:scale(2)}
	  	78%,100%{opacity:0}
	  }
	  .light {
	  	  position: absolute;
		  width: 40rpx;
		  height: 40rpx;
		  background-color: #FFFFFF;
		  border-radius: 50%;
		  border: 5rpx solid #d3d3d3;
	  }
	  .light:before {
		  content: '';
		  display:block;
		  width: 40rpx;
		  height: 40rpx;
		  border-radius: 50%;
		  opacity: .7;
		  background-color: #FFFFFF;
		  animation: scale 2s infinite cubic-bezier(0,0,.49,1.02);
		  animation-delay: 200ms;
	   }
	  .content {
		  width: 50%;
		  height: 50%;
		  background-color: #F8F8F8;
		  border-radius: 10rpx;
		  box-shadow:inset 0rpx 0rpx 50rpx 2rpx #808080;
	  }
  }
</style>
