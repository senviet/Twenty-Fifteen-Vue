<template>
  <aside class="widget widget_search">
    <h2 class="widget-title" v-if="data.title" v-text="data.title"></h2>
    <form role="search" method="get" class="search-form" action="http://twenty-fifteen.dev/">
      <label>
        <span class="screen-reader-text">Search for:</span>
        <input type="search" class="search-field" placeholder="Search …" v-model="query" name="s">
      </label>
    </form>
  </aside>
</template>
<script>
  export default{
    props: {
      data: {
        default: () => {
          return {
            title: ''
          }
        }
      }
    },
    data () {
      return {
        query: ''
      }
    }
  }
</script>
