<template>
	<div class="wrap-nav">
		<ul class="nav">
			<li>首页</li>
			<li>视频</li>
			<li>联系</li>
		</ul>
	</div>
</template>

<script>

</script>

<style lang="css" scoped>
.warp-nav{width: 100%;height: 100%;display: flex;justify-content: center;}
.nav{
	width: 300px;height: 80px;background: #000;display: flex;justify-content: space-between;align-items: center;
}
.nav li{width: 100%;height: 100%;line-height: 80px;color: #ffff00}
.nav li:hover{background-color: #ffff00;color: #000;cursor: pointer;}
</style>