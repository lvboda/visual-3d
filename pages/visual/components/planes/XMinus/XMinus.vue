<template>
	<view class="x-minus-box">
		<img class="bg" src="/static/plane_bg.jpeg" />
		<view class="footer" />
		<photo-frame :style="{width: '29vh', height: '29vh'}">
			<img :src="`${baseUrl}/7.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
		<photo-frame :style="{width: '35vh', height: '40vh'}">
			<img :src="`${baseUrl}/11.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
		<photo-frame :style="{width: '29vh', height: '29vh'}">
			<img :src="`${baseUrl}/9.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
		<photo-frame :style="{width: '39vh', height: '39vh'}">
			<img :src="`${baseUrl}/10.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
		<photo-frame :style="{width: '24vh', height: '30vh'}">
			<img :src="`${baseUrl}/14.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
		<photo-frame :style="{width: '34vh', height: '34vh'}">
			<img :src="`${baseUrl}/8.jpeg`" style="width:100%;height:100%" />
		</photo-frame>
	</view>
</template>

<script>
	import PhotoFrame from '@/components/PhotoFrame/PhotoFrame.nvue';
	export default {
		components: {
			PhotoFrame,
		},
		data() {
			return {
				baseUrl: this.staticURL + "/photos",
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  .x-minus-box {
	  position: relative;
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  align-items: center;
	  justify-content: center;
	  align-content: center;
	  transform: scaleX(-1);
	  width: 100vh;
	  height: 100vh;
	  padding: 20rpx;
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
  }
</style>

