import { connect } from 'react-redux'
import { compose, prop, when, propEq } from 'ramda'
import { css } from 'aphrodite'

import { styles } from '../styles'
import { h } from '../helpers'
import { imageSearch } from '../thunks'

const SearchForm = ({ searchTerm }) => {
  let textInput = null
  return h('section', { className: css(styles.search) }, [
    h('input', {
      className: css(styles.input),
      type: 'text',
      key: 'term',
      ref: (input) => { textInput = input },
      onKeyPress: when(propEq('key', 'Enter'), () => searchTerm(textInput))
    }),
    h('button', { className: css(styles.btn), key: 'search-button', onClick: () => searchTerm(textInput) }, 'Search'),
  ])
}

const dispatchProps = dispatch => ({
  searchTerm: compose(dispatch, imageSearch, prop('value')),
})

export default connect(null, dispatchProps)(SearchForm)
