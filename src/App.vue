<template>
  <div id="app">

  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './vuex/store'
export default {
  replace: false,
  store,
  components: {
    Hello
  }
}
</script>

<style>

</style>
