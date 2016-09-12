<template>
    <div class="widget-area" role="complementary">
      <component v-for="widget in widgets" :is="widget.type" :data="widget.data"></component>
    </div>
</template>
<script>
import TextWidget from './Widget/Text.vue'
import SearchWidget from './Widget/Search.vue'
import ArchiveWidget from './Widget/Archive.vue'
import PostWidget from './Widget/Post.vue'
export default{
  components: {
    TextWidget,
    SearchWidget,
    ArchiveWidget,
    PostWidget
  },
  data () {
    return {
      widgets: [
        {
          type: 'text-widget',
          data: {
            title: 'Title',
            content: 'Content'
          }
        },
        {
          type: 'post-widget',
          data: {
            title: 'Recent Post',
            posts: [
              {
                title: {
                  rendered: 'This is a test post!'
                },
                date: '2016-09-03T13:54:33'
              }
            ]
          }
        },
        {
          type: 'search-widget',
          data: {
            title: 'Search'
          }
        },
        {
          type: 'archive-widget',
          data: {
            title: 'Archive',
            type: 'dropbox',
            items: [
              {
                title: 'September 2016',
                href: '/sep-2016',
                count: 20
              }
            ]
          }
        }
      ]
    }
  }
}
</script>
