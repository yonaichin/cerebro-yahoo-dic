import logo from '../icon.png'

export const fn = ({ term, display, actions }) => {
  const regx = /^yd /g
  if (regx.test(term)) {
    const query = term.split(' ')[1]
    const title = query === ''
    ? 'Enter query...'
    : `Search Yahoo! Dictionary for: ${query}`
    display({
      title,
      icon: logo,
      onSelect: (event) => actions.open(`https://tw.dictionary.search.yahoo.com/search?p=${query}`),
      keyword: 'yd'
    })
  }

}

export const keyword = 'yd'
export const name = 'Yahoo! Dictionary'
export const icon = logo
