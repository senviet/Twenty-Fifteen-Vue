<template>
  <div>
    <nav id="site-navigation" class="main-navigation" role="navigation">
      <main-menu :items="mainMenuItems"></main-menu>
    </nav>
    <social-menu :items="socialMenuItems"></social-menu>
  </div>
</template>
<script>
  import {mainMenuItems, socialMenuItems} from './../../vuex/menu/getters'
  import {loadMenus} from './../../vuex/menu/actions'
  import MainMenu from './Menu/MainMenu.vue'
  import SocialMenu from './Menu/SocialMenu.vue'
  export default{
    components: {
      MainMenu,
      SocialMenu
    },
    vuex: {
      getters: {
        mainMenuItems: mainMenuItems,
        socialMenuItems: socialMenuItems
      },
      actions: {
        loadMenus
      }
    },
    ready () {
      this.loadMenus()
    }
  }
</script>
