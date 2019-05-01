<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="(page,index) of pages" :key="index">
		    	<div class="nav-contain" v-for="item of page">
			    	<div class="nav-icon"><img :src="item.imgurl" /></div>
					<div class="nav-desc">{{item.desc}}</div>	
				</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "HomeNavigator",
		data (){
			return{
				swiperOption:{
					pagination: '.swiper-pagination',
					loop: true,
				},
				items:[
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc: "景点门票"
					},
				]
			}
		},
		computed:{
			pages(){
				const pages = [];
				this.items.forEach((item,index)=>{
					const page = Math.floor(index/8);
					if (!pages[page]){
						pages[page] = [];
					} 
					pages[page].push(item);
				})
				return pages
				console.log(pages)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper
		width: 100%
		height: 20rem
		.swiper-slide
			margin-top: 2%
			margin-bottom: 5%
			float: left
			.nav-icon
				width: 100%
				height: 100%
				text-align: center
				img
					width: 4rem
					height: 4rem
					display: block
					margin: 0 auto
 			.nav-desc
				width: 100%
				font-size: 1.4rem
				text-align: center

</style>
