<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary">
          <menu-widget></menu-widget>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MenuWidget from './Sidebar/Menu.vue'
  export default{
    components: {
      HeaderWidget,
      MenuWidget
    }
  }
</script>
<style lang="scss" scoped></style>
