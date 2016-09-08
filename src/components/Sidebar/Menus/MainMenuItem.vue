<template>
  <li id="menu-item-{{ item.id }}" class="menu-item-{{ item.id }}">
    <a href="{{ item.url }}">{{ item.title }}
      <div class="menu-item-description" v-if="item.description">{{ item.description }}</div>
    </a>

    <template v-if="hasSubMenu">
      <button class="dropdown-toggle" aria-expanded="false">
        <span class="screen-reader-text">collapse child menu</span>
      </button>
      <ul class="submenu">
        <!-- TODO can render cho nay -->
      </ul>
    </template>
  </li>
</template>

<script>
export default{
  props: ['item'],
  computed: {
    hasSubMenu () {
      return this.item.children
    }
  }
}
</script>

<style lang="scss" scoped></style>