import { map, compose, prop, merge } from 'ramda'
import { css } from 'aphrodite'

import Result from './Result'
import { styles } from '../styles'
import { h } from '../helpers'
import { dispatch } from '../store'
import { imageSearch } from '../thunks'

const searchTerm = compose(dispatch, imageSearch, prop('value'))
const mapResults = map(result => h(Result, merge(result, { key: result.nasa_id })))

const Search = ({ search }) => {
  let textInput = null
  return h('section', { className: css(styles.search) }, [
    h('h1', { className: css(styles.searchTitle), key: 'search-title' }, 'Search'),
    h('input', { className: css(styles.input), type: 'text', key: 'term', ref: (input) => { textInput = input; } }),
    h('button', { className: css(styles.btn), key: 'search-button', onClick: () => searchTerm(textInput) }, 'Search'),
    h('hr', { key: 'hr-' }),
    h('ul', { className: css(styles.results), key: 'results' }, mapResults(search))
  ])
}

export default Search
