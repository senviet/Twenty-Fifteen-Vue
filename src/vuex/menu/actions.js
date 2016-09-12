import httpService from './../../services/http.js'
export const loadMenus = ({dispatch, state}) => {
  httpService.getMenus().then((response) => {
    let menus = response.json()
    dispatch('MENU.MAIN.ITEMS.SET', menus.primary.items)
    dispatch('MENU.SOCIAL.ITEMS.SET', menus.social.items)
  }, (response) => {
    console.log(response)
  })
}
