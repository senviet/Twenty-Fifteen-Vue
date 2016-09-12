<template>
  <nav id="social-navigation" class="social-navigation" role="navigation">
    <div class="menu-social-container">
      <ul id="menu-social" class="menu">
          <li v-for="item in items" id="menu-item-{{ item.id }}" class="menu-item menu-item-{{ item.id }}">
            <a href="{{ item.url }}">
              <span class="screen-reader-text" v-text="item.title"></span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
export default{
  props: ['items']
}
</script>
