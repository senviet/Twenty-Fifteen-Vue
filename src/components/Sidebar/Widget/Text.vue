<template>
  <aside class="widget widget_text">
    <h2 class="widget-title" v-text="data.title"></h2>
    <div class="textwidget" v-text="data.content"></div>
  </aside>
</template>
<script>
  export default{
    props: {
      data: {
        title: '',
        content: ''
      }
    }
  }
</script>
