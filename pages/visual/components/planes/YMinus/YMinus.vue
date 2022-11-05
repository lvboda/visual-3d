<template>
	<view class="y-minus-box">
		<img :src="`${STATIC_URL}/images/floor_bg.jpeg`" :style="{width: '120%', height: '120%'}"/>
	</view>
</template>

<script>
	import { STATIC_URL } from '@/utils/constant.js';
	export default {
		data() {
			return {
				STATIC_URL,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  .y-minus-box {
	  width: 100vh;
	  height: 100vh;
  }
</style>
