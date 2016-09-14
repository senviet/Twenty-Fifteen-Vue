<template>
	<div class="menu-main-container">
		<ul id="main-menu" class="nav-menu">
			<main-menu-item v-for="menuItem in items" :item="menuItem"></main-menu-item>
		</ul>
	</div>
</template>

<script>
import MainMenuItem from './MainMenuItem.vue'
export default{
  props: ['items'],
  components: {
    MainMenuItem
  }
}
</script>

<style type="scss" scoped></style>
