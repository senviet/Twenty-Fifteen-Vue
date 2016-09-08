<template>
  <nav id="social-navigation" class="social-navigation" role="navigation" v-if="socialMenuItems">
    <div class="menu-social-container">
      <ul id="menu-social" class="menu">
        <template v-for="menuItem in socialMenuItems">
          <social-menu-item :item="menuItem"></social-menu-item>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {socialMenuItems} from './../../../vuex/menu/getters'
import SocialMenuItem from './SocialMenuItem.vue'
export default{
  vuex: {
    getters: {
      socialMenuItems: socialMenuItems
    }
  },
  components: {
    SocialMenuItem
  }
}
</script>