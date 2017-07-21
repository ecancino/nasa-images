import { h } from '../helpers'
import Search from './Search'
import PlayList from './PlayList'

const App = ({ playlist, search }) =>
  h('section', { className: 'App' }, [
    h(Search, { search, key: 'search' }),
    h(PlayList, { playlist, key: 'list' })
  ])

export default App
