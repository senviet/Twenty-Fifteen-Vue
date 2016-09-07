import httpService from './../../services/http'
export const loadSettings = ({dispatch, state}) => {
  httpService.getSettings().then((response) => {
    let settings = response.json()
    dispatch('SETTING.TITLE.SET', settings.title)
    dispatch('SETTING.TAGLINE.SET', settings.tagline)
  }, (response) => {
    console.log(response)
  })
}
