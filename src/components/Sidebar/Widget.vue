<template>
    <div class="widget-area" role="complementary">
      <component v-for="widget in widgets" :is="widget.type" :data="widget.data"></component>
    </div>
</template>
<script>
import TextWidget from './Widget/Text.vue'
import SearchWidget from './Widget/Search.vue'
import ArchiveWidget from './Widget/Archive.vue'
export default{
  components: {
    TextWidget,
    SearchWidget,
    ArchiveWidget
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
