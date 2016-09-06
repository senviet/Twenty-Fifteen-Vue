import httpService from './../../services/http'
export const loadSettings = ({dispatch, state}) => {
  httpService.getSettings().then((response) => {
    dispatch('SETTING.TITLE.SET', 'Site title')
    dispatch('SETTING.TAGLINE.SET', 'Site tagline')
    let settings = response.json()
    dispatch('SETTING.TITLE.SET', settings.title)
    dispatch('SETTING.TAGLINE.SET', settings.tagline)
  }, (response) => {
    console.log(response)
  })
}
