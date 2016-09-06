export const populateIncluded = ({dispatch, state}, included) => {
  included.forEach((node) => {
    switch (node.type) {
      case 'terms':
        dispatch('TERMS/ADD', node)
        break
      case 'articles':
        dispatch('ARTICLES/ADD', node)
        break
      case 'users':
        dispatch('USERS/ADD', node)
        break
    }
  })
}
