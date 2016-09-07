<template>
	<nav id="site-navigation" class="main-navigation" role="navigation">
		<div class="menu-main-container">
			<ul id="main-menu" class="nav-menu">
				<site-menu-item></site-menu-item>
			</ul>
		</div>
	</nav>
</template>

<script>
	import SiteMenuItem from './SiteMenuItem.vue'
	export default{
	  components: {
	    SiteMenuItem
	  }
	}
</script>

<style type="scss" scoped></style>