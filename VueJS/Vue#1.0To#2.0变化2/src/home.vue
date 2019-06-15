<template>
	<div>
		<h2>我是主页</h2>
		<ul>
			<li><router-link to='/home/movie'>视频页</router-link></li>
			<li><router-link to='/home/culture'>未来页</router-link></li>
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