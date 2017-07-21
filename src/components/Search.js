import { connect } from 'react-redux'
import { map, compose, merge } from 'ramda'
import { css } from 'aphrodite'

import SearchForm from './SearchForm'
import Result from './Result'
import { styles } from '../styles'
import { h } from '../helpers'
import { fetchAudio } from '../thunks'

const Search = ({ search, getAudio }) => {
  return h('section', { className: css(styles.search) }, [
    h('h1', { className: css(styles.searchTitle), key: 'search-title' }, 'Search'),
    h(SearchForm, { key: 'search-form' }),
    h('hr', { className: css(styles.hr),key: 'hr-' }),
    h('ul', { className: css(styles.results), key: 'results' },
      map(result => h(Result, merge(result, { key: result.nasa_id, getAudio: () => getAudio(result) })), search)
    )
  ])
}

const stateProps = ({ search }) => ({ search })
const dispatchProps = dispatch => ({
  getAudio: compose(dispatch, fetchAudio)
})

export default connect(stateProps, dispatchProps)(Search)
