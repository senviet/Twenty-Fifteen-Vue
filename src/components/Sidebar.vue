<template>
  <div id="sidebar" class="sidebar">
        <header-widget></header-widget>
        <div id="secondary" class="secondary" :class="{'toggled-on': toggleOn}">
          <menu-widget></menu-widget>
          <widget-area></widget-area>
        </div>
    </div>
</template>

<script>
  import HeaderWidget from './Sidebar/Header.vue'
  import MenuWidget from './Sidebar/Menu.vue'
  import WidgetArea from './Sidebar/WidgetArea'
  export default{
    data () {
      return {
        toggleOn: false
      }
    },
    components: {
      HeaderWidget,
      MenuWidget,
      WidgetArea
    },
    events: {
      'toggle-sidebar': function (toggleOn) {
        this.toggleOn = toggleOn
      }
    }
  }
</script>
<style lang="scss" scoped></style>
