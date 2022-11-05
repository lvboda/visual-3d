<template>
	<view class="z-minus-box">
		<img class="bg" src="/static/plane_bg.jpeg" />
		<view class="footer" />
		<view class="content">
			<view class="font-LED"><span>{{years}}</span><span>年</span></view>
			<view class="font-LED"><span>{{days}}</span><span>天</span></view>
			<view class="font-LED"><span>{{hours}}</span><span>小时</span></view>
			<view class="font-LED"><span>{{minutes}}</span><span>分钟</span></view>
			<view class="font-LED"><span>{{seconds}}</span><span>秒</span></view>
			<view class="text">愿每一秒都与你同在</view>
		</view>
	</view>
</template>

<script>
	const startTime = '2019/02/04 00:52:00';
	export default {
		data() {
			return {
				years: '',
				days: '',
				hours: '',
				minutes: '',
				seconds: '',
				timer: null,
			};
		},
		created() {
			this.getTime();
		},
		mounted() {
		  const timer = setInterval(() => this.getTime(), 1000);
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer);
			}
		},
		methods: {
			getTime() {
				const now = new Date();
				let diffMillisecond = now.getTime() - new Date(startTime).getTime();
				diffMillisecond = diffMillisecond - (24*3600*1000);
				const years = Math.floor(diffMillisecond/((365*24*3600*1000)));
				const remainingTime = diffMillisecond%((365*24*3600*1000));
				const days = Math.floor(remainingTime/(24*3600*1000));
				const remainingTime1 = remainingTime%(24*3600*1000);
				const hours = Math.floor(remainingTime1/(3600*1000));
				const remainingTime2 = remainingTime1%(3600*1000);
				const minutes = Math.floor(remainingTime2/(60*1000));
				const remainingTime3 = remainingTime2%(60*1000);
				const seconds = Math.round(remainingTime3/1000);
				this.years = years;
				this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				this.seconds = seconds;
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
