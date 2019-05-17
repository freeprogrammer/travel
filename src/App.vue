<template>
	<keep-alive>
    	<router-view></router-view>
	</keep-alive>
</template>

<script>
export default {
  name: 'App',
  activated(){
  	//动态加载缓存不让他一直缓存
  }
}
</script>
