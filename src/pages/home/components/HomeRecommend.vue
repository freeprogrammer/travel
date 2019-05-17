<template>
	<div>
		<div class="recomment-title">猜您喜欢</div>
		<ul>
			<li class="item" v-for="item of items">
				<img class="item-img"  :src="item.pic" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>					
				</div>
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
						title: "厦门科技馆",
						desc: "依山傍海，风景优美，建筑宏伟，独具特色",
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg",
						title: "鼓浪屿",
						desc: "文艺小清新景点",
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_200x200_9c5b5a22.jpg",
						title: "厦门方特梦幻王国",
						desc: "心形过山车，刺激惊险的另类浪漫",
					},
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~styles/var.styl"
	.recomment-title
		margin-top: 1rem
		line-height: 4rem
		background: #eee
		text-indent: 1rem
		font-size: 1.4rem
	.item
		display: flex
		overflow: hidden
		height: 8rem
		.item-img
			width: 6rem
			height: 6rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem .1rem .1rem .5rem
			.item-title
				line-height: 3rem
				font-size: 1.6rem
			.item-desc
				line-height: 1rem
				color: #666
				ellipsis()
			.item-button
				line-height: 1.2rem
				margin-top: .5rem
				background: #ff9300
				padding: .2rem 2rem
				border-radius: 0.6rem
				color: #fff
				ellipsis()
</style>
