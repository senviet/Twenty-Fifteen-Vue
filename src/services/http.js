import Vue from 'vue'
export default{
  getSettings () {
    return Vue.http.get('settings')
  },
  getMenus (location) {
    return Vue.http.get('menus/' + location)
  }
}
