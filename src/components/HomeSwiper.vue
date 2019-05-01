<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="item in swiperList" :key="item.id">
		    	<img :src="item.imgUrl" class="swiper-img" />
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "HomeSwiper",
		data (){
			return{
				swiperOption:{
					pagination: '.swiper-pagination',
					loop: true
				},
				swiperList:[
					{
						id: "0001",
						imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/17e2352b857f66e9d2948e98dc483bc2.jpg_750x200_2857d0a3.jpg"
					},
					{
						id: "0002",
						imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg"
					},
					
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff !important
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 27%
		.swiper-img
			width: 100%
</style>
