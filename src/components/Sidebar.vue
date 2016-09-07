<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary">
        	<site-menu-widget></site-menu-widget>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import SiteMenuWidget from './Sidebar/Menus/SiteMenu.vue'
  export default{
    components: {
      HeaderWidget,
      SiteMenuWidget
    }
  }
</script>
<style lang="scss" scoped></style>
