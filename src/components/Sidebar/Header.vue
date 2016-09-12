<template>
  <header id="masthead" class="site-header" role="banner">
    <div class="site-branding">
      <h1 class="site-title"><a href="/" rel="home" v-text="title"></a></h1>
      <p class="site-description" v-text="tagline"></p>
      <button class="secondary-toggle" @click="toggle" :class="{'toggled-on': toggleOn}">Menu and widgets</button>
    </div><!-- .site-branding -->
  </header><!-- .site-header -->
</template>
<script>
  import {title, tagline} from './../../vuex/setting/getters'
  export default{
    data () {
      return {
        toggleOn: false
      }
    },
    vuex: {
      getters: {
        title: title,
        tagline: tagline
      }
    },
    methods: {
      toggle () {
        this.toggleOn = !this.toggleOn
        this.$dispatch('toggle-sidebar', this.toggleOn)
      }
    }
  }
</script>
<style lang="scss" scoped></style>
