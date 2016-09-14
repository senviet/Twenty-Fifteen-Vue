import httpService from './../../services/http'
export const loadSettings = ({dispatch, state}) => {
  httpService.getSettings().then((response) => {
    let settings = response.json()
    dispatch('SETTING.TITLE.SET', settings.title)
    dispatch('SETTING.TAGLINE.SET', settings.tagline)
    dispatch('SETTING.DATE_FORMAT.SET', settings.date_format)
  }, (response) => {
    console.log(response)
  })
}
