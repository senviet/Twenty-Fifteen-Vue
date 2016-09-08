<template>
	<nav id="site-navigation" class="main-navigation" role="navigation">
		<div class="menu-main-container">
			<ul id="main-menu" class="nav-menu">
				<template v-for="menuItem in mainMenuItems">
          <main-menu-item :item="menuItem"></main-menu-item>
        </template>
			</ul>
		</div>
	</nav>
</template>

<script>
import {mainMenuItems, socialMenuItems} from './../../../vuex/menu/getters'
import MainMenuItem from './MainMenuItem.vue'
export default{
  vuex: {
    getters: {
      mainMenuItems: mainMenuItems,
      socialMenuItems: socialMenuItems
    }
  },
  components: {
    MainMenuItem
  }
}
</script>

<style type="scss" scoped></style>