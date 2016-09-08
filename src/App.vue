<template>
  <div id="app">
    <div id="page" class="hfeed site">
      <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
      <sidebar></sidebar>
      <!-- main -->
      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import Sidebar from './components/Sidebar.vue'
import SiteFooter from './components/Footer.vue'
import {loadSettings} from './vuex/setting/actions'
import {loadMainMenus, loadSocialMenus} from './vuex/menu/actions'
export default {
  replace: false,
  store,
  components: {
    Sidebar,
    SiteFooter
  },
  vuex: {
    actions: {
      loadSettings,
      loadMainMenus,
      loadSocialMenus
    }
  },
  ready () {
    this.loadSettings()
    this.loadMainMenus()
    this.loadSocialMenus()
  }
}
</script>
<style src="nprogress/nprogress.css"></style>
