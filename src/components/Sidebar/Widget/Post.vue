<template>
  <aside class="widget widget_recent_entries">
    <h2 class="widget-title" v-if="data.title" v-text="data.title"></h2>
    <ul>
      <li v-for="post in data.posts">
        <a href="#" v-text="post.title.rendered"></a>
        <span class="post-date" v-text="post.date"></span>
      </li>
    </ul>
  </aside>
</template>
<script>
  export default{
    props: ['data']
  }
</script>
