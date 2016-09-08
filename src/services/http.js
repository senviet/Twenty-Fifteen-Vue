import Vue from 'vue'
export default{
  getSettings () {
    return Vue.http.get('settings')
  },
  getMenus (menuId) {
    return Vue.http.get('menus/' + menuId)
  }
}
