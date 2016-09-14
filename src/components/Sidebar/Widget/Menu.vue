<template>
  <aside class="widget widget_nav_menu">
    <h2 v-if="data.title" class="widget-title" v-text="data.title"></h2>
    <main-menu :items="data.items"></main-menu>
  </aside>
</template>
<script>
  import MainMenu from './../Menu/MainMenu.vue'
  export default{
    props: {
      data: {
        type: Object,
        default: () => {
          return {
            title: '',
            items: []
          }
        }
      }
    },
    components: {
      MainMenu
    }
  }
</script>
