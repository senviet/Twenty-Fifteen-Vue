<template>
  <div id="app">
    <div id="page" class="hfeed site">
      <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
      <sidebar></sidebar>
      <!-- main -->
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import Sidebar from './components/Sidebar.vue'
import {loadSettings} from './vuex/setting/actions'
export default {
  replace: false,
  store,
  components: {
    Sidebar
  },
  vuex: {
    actions: {
      loadSettings
    }
  },
  ready () {
    this.loadSettings()
  }
}
</script>
<style src="nprogress/nprogress.css"></style>
