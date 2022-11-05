<template>
	<view class="nucleic-acid">
	  <img :src="`${staticURL}/photos/nucleic-acid1.jpeg`" style="width:100%;height:100%" />
	  <view class="nucleic-acid__time">
		{{ now }}
	  </view>
	</view>
</template>

<script>
	function dateFormat(fmt, date) {
	    let ret;
	    const opt = {
	        "Y+": date.getFullYear().toString(),        // 年
	        "m+": (date.getMonth() + 1).toString(),     // 月
	        "d+": date.getDate().toString(),            // 日
	        "H+": date.getHours().toString(),           // 时
	        "M+": date.getMinutes().toString(),         // 分
	        "S+": date.getSeconds().toString()          // 秒
	        // 有其他格式化字符需求可以继续添加，必须转化成字符串
	    };
	    for (let k in opt) {
	        ret = new RegExp("(" + k + ")").exec(fmt);
	        if (ret) {
	            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
	        };
	    };
	    return fmt;
	}
	export default {
		data() {
			return {
				baseUrl: this.staticURL,
				now: '',
			}
		},
		created() {
		  setInterval(() => {
			this.now = dateFormat("YYYY-mm-dd HH:MM:SS", new Date())
		  }, 1000);	
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.nucleic-acid {
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	.nucleic-acid__time {
		top: 420rpx;
		left: 230rpx;
		position: absolute;
		width: 300rpx;
		height: 50rpx;
		background: #ffffff;
		color: #53bb54;
		font-size: 15px;
		font-weight: 500;
		white-space: nowrap;
		text-align: center;
	}
</style>
