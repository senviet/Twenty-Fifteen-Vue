<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary">
        	<main-menu></main-menu>
          <social-menu></social-menu>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MainMenu from './Sidebar/Menus/MainMenu.vue'
  import SocialMenu from './Sidebar/Menus/SocialMenu.vue'
  export default{
    components: {
      HeaderWidget,
      MainMenu,
      SocialMenu
    }
  }
</script>
<style lang="scss" scoped></style>
