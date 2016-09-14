<template>
  <aside class="widget widget_recent_entries">
    <h2 class="widget-title" v-if="data.title" v-text="data.title"></h2>
    <ul>
      <li v-for="post in data.posts">
        <a href="#" v-text="post.title.rendered"></a>
        <span v-if="data.showDate" class="post-date" v-text="formatDate(post.date, dateFormat)"></span>
      </li>
    </ul>
  </aside>
</template>
<script>
  import moment from 'moment'
  import {dateFormat} from './../../../vuex/setting/getters'
  export default{
    props: {
      data: {
        default: () => {
          return {
            posts: []
          }
        }
      }
    },
    vuex: {
      getters: {
        dateFormat: dateFormat
      }
    },
    methods: {
      formatDate: (date, dateFormat) => {
        return moment(date).formatPHP(dateFormat)
      }
    }
  }
</script>
