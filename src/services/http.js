import Vue from 'vue'
export default{
  getSettings () {
    return Vue.http.get('settings')
  },
  getMenus () {
    return Vue.http.get('menus')
  }
}
