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
						imgurl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
						desc: "一日游"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
						desc: "厦门必游"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png",
						desc: "鼓浪屿"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
						desc: "武夷山"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
						desc: "主题乐园"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
						desc: "动植物园"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
						desc: "展馆展览"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
						desc: "游船观光"
					},
					{
						imgurl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
						desc: "泡温泉"
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
		height: auto
		background: #FFF
		.nav-contain
			width: 25%
			margin-top: 0.5%
			margin-bottom: 1%
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
