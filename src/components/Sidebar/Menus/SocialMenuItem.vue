<template>
  <li id="menu-item-{{ item.id }}" class="menu-item menu-item-{{ item.id }}">
    <a href="{{ item.url }}">
      <span class="screen-reader-text">{{ item.title }}</span>
    </a>
  </li>
</template>

<script>
export default{
  props: ['item']
}
</script>