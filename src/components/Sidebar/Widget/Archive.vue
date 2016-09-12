<template>
  <aside class="widget widget_archive">
    <h2 class="widget-title" v-if="data.title" v-text="data.title"></h2>
    <ul v-if="data.type == 'list'">
      <li v-for="item in data.items"><a :href="item.href" v-text="item.title"></a>&nbsp;({{item.count}})</li>
    </ul>
    <template v-else>
      <label class="screen-reader-text" v-if="data.title" v-text="data.title"></label>
      <select name="archive-dropdown">
        <option value="">Select Month</option>
        <option v-for="item in data.items">{{item.title}}&nbsp;({{item.count}})</option>
      </select>
    </template>
  </aside>
</template>
<script>
  export default{
    props: ['data']
  }
</script>
