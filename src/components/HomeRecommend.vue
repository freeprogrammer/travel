<template>
	<div class="wrapper">
		<div class="title">猜您喜欢</div>
		<ul>
			<li v-for="item in items">
				<div class="pic"><img :src="item.pic" /></div>
				<div class="introd">{{item.introd}}</div>
				<div class="desc">{{item.desc}}</div>
				<div class="price"><span>¥<em>{{item.price}}</em></span>起</div>	
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "HomeRecommend",
		data(){
			return{
				items:[
					{
						pic: "http://img1.qunarzz.com/sight/p0/1904/95/9509ca0f0caef167a3.img.jpg_200x200_74237266.jpg",
						introd: "厦门科技馆",
						desc: "依山傍海，风景优美，建筑宏伟，独具特色",
						price: "98"
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg",
						introd: "鼓浪屿",
						desc: "文艺小清新景点",
						price: "188"
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_200x200_9c5b5a22.jpg",
						introd: "厦门方特梦幻王国",
						desc: "心形过山车，刺激惊险的另类浪漫",
						price: "280"
					},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper
		background: #FFF
		margin-top: 1%
		padding: 1rem 0 0 1.4rem
		.title
			font-size: 2rem
		ul
			li
				margin-top: 1rem
				height: 10rem
				background: #FFF
				.pic
					width: 10rem
					height: 10rem
					float: left
					margin-right: 2%
				.introd
					width: 62%
					font-size: 1.6rem	
					color: #212121
					float: left
					margin-top: 1rem
				.desc
					width: 62%
					float: left
					margin-top: 1.5%
					font-size: 1.4rem
				.price
					width: 62%
					float: left 
					margin-top: 1.5%
					color: #ff8300
					letter-spacing: 0.05rem
					span
						em
							font-size: 1.4rem
</style>
