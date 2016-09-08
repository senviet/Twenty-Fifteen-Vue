<template>
  <nav id="social-navigation" class="social-navigation" role="navigation">
    <div class="menu-social-container">
      <ul id="menu-social" class="menu">
          <social-menu-item v-for="menuItem in items" :item="menuItem"></social-menu-item>
      </ul>
    </div>
  </nav>
</template>

<script>
import SocialMenuItem from './SocialMenuItem.vue'
export default{
  props: ['items'],
  components: {
    SocialMenuItem
  }
}
</script>
