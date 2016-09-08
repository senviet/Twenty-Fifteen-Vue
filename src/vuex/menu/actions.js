import httpService from './../../services/http.js'
export const loadMainMenus = ({dispatch, state}) => {
  httpService.getMenus(2).then((response) => {
    let menus = response.json()
    dispatch('MENU.MAIN.ITEMS.SET', menus.items)
  }, (response) => {
    console.log(response)
  })
}

export const loadSocialMenus = ({dispatch, state}) => {
  httpService.getMenus(3).then((response) => {
    let menus = response.json()
    dispatch('MENU.SOCIAL.ITEMS.SET', menus.items)
  }, (response) => {
    console.log(response)
  })
}
