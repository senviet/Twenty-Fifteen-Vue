<template>
  <li id="menu-item-{{ item.id }}" class="menu-item-{{ item.id }}">
    <a href="{{ item.url }}">{{ item.title }}
      <div class="menu-item-description">{{ item.description }}</div>
    </a>
  </li>
</template>

<script>
export default{
  props: ['item']
}
</script>

<style lang="scss" scoped></style>