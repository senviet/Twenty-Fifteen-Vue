<template>
  <li :class="{'menu-item-has-children':hasSubMenu}">
    <a :href="item.url" v-text="item.title">
      <div class="menu-item-description" v-text="item.description"></div>
    </a>
    <template v-if="hasSubMenu">
      <button @click.prevent="toggle" class="dropdown-toggle" :class="{'toggle-on': toggleOn}" aria-expanded="false">
        <span class="screen-reader-text">collapse child menu</span>
      </button>
      <ul class="sub-menu" :class="{'toggled-on': toggleOn}">
        <main-menu-item v-for="menuItem in item.children" :item="menuItem"></main-menu-item>
      </ul>
    </template>
  </li>
</template>

<script>
  export default{
    name: 'main-menu-item',
    props: ['item'],
    data () {
      return {
        toggleOn: false
      }
    },
    computed: {
      hasSubMenu () {
        return this.item.children != null
      }
    },
    methods: {
      toggle () {
        this.toggleOn = !this.toggleOn
      }
    }
  }
</script>

<style lang="scss" scoped></style>
