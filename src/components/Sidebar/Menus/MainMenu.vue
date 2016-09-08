<template>
	<nav id="site-navigation" class="main-navigation" role="navigation" v-if="mainMenuItems">
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
import {mainMenuItems} from './../../../vuex/menu/getters'
import MainMenuItem from './MainMenuItem.vue'
import {loadMainMenus} from './../../../vuex/menu/actions'

export default{
  vuex: {
    getters: {
      mainMenuItems: mainMenuItems
    },
    actions: {
      loadMainMenus
    }
  },
  components: {
    MainMenuItem
  },
  ready () {
    this.loadMainMenus()
  }
}
</script>

<style type="scss" scoped></style>
