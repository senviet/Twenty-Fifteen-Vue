<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary" :class="{'toggled-on': toggleOn}">
          <menu-widget></menu-widget>
        </div>
        <widget></widget>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MenuWidget from './Sidebar/Menu.vue'
  import Widget from './Sidebar/Widget'
  export default{
    data () {
      return {
        toggleOn: false
      }
    },
    components: {
      HeaderWidget,
      MenuWidget,
      Widget
    },
    events: {
      'toggle-sidebar': function (toggleOn) {
        this.toggleOn = toggleOn
      }
    }
  }
</script>
<style lang="scss" scoped></style>
