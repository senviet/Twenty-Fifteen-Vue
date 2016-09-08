<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary">
        	<main-menu></main-menu>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MainMenu from './Sidebar/Menus/MainMenu.vue'
  export default{
    components: {
      HeaderWidget,
      MainMenu
    }
  }
</script>
<style lang="scss" scoped></style>
