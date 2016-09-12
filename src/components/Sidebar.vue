<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary" :class="{'toggled-on': toggleOn}">
          <menu-widget></menu-widget>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MenuWidget from './Sidebar/Menu.vue'
  export default{
    data () {
      return {
        toggleOn: false
      }
    },
    components: {
      HeaderWidget,
      MenuWidget
    },
    events: {
      'toggle-sidebar': function (toggleOn) {
        this.toggleOn = toggleOn
      }
    }
  }
</script>
<style lang="scss" scoped></style>
