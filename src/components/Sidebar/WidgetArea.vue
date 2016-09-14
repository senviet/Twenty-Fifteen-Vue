<template>
    <div class="widget-area" role="complementary">
      <template v-for="widget in widgets">
        <component :is="widget.type" :data="widget.data"></component>
      </template>
    </div>
</template>
<script>
import TextWidget from './Widget/Text.vue'
import SearchWidget from './Widget/Search.vue'
import ArchiveWidget from './Widget/Archive.vue'
import PostWidget from './Widget/Post.vue'
import MenuWidget from './Widget/Menu.vue'
export default{
  components: {
    TextWidget,
    SearchWidget,
    ArchiveWidget,
    PostWidget,
    MenuWidget
  },
  data () {
    return {
      widgets: [
        {
          type: 'text-widget',
          data: {
            title: 'Nunc sed',
            content: 'Praesent ac sem eget est egestas volutpat. Ut leo. Nulla sit amet est. Phasellus nec sem in justo pellentesque facilisis. Quisque id odio.'
          }
        },
        {
          type: 'post-widget',
          data: {
            title: 'Recent Post',
            showDate: true,
            posts: [
              {
                title: {
                  rendered: 'This is post 1'
                },
                date: '2016-09-03T13:54:33'
              },
              {
                title: {
                  rendered: 'This is post 2'
                },
                date: '2016-09-04T13:54:33'
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
        },
        {
          type: 'menu-widget',
          data: {
            title: 'Custom menu',
            items: [
              {
                'id': 6,
                'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                'title': 'Sample Page',
                'parent': 0,
                'children': [
                  {
                    'id': 9,
                    'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                    'title': 'Sample Page',
                    'parent': 6
                  },
                  {
                    'id': 7,
                    'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                    'title': 'Sample Page',
                    'parent': 6,
                    'children': [
                      {
                        'id': 8,
                        'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                        'title': 'Sample Page',
                        'parent': 7
                      },
                      {
                        'id': 10,
                        'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                        'title': 'Sample Page',
                        'parent': 7
                      }
                    ]
                  }
                ]
              },
              {
                'id': 11,
                'url': 'http:\\\\twenty-fifteen.dev\\sample-page',
                'title': 'Sample Page',
                'parent': '0'
              }
            ]
          }
        }
      ]
    }
  }
}
</script>
