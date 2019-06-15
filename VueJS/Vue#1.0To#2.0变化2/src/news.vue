<template>
	<div>
		<h2>我是新闻<span style="font-size: 12px;color: #f40">有参数的东西</span></h2>
		<ul>
			<li><router-link to="/news/cwx001/age/10">cwx001</router-link></li>
			<li><router-link to="/news/cwx002/age/20">cwx002</router-link></li>
			<li><router-link to="/news/cwx003/age/30">cwx003</router-link></li>
		</ul>
		
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

</script>

<style lang="css" scoped>
</style>