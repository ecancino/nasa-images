import { h } from '../helpers'
import Message from './Message'
import Search from './Search'
import PlayList from './PlayList'
import Footer from './Footer'

const App = () =>
  h('section', { className: 'App' }, [
    h(Message, { key: 'message' }),
    h(Search, { key: 'search' }),
    h(PlayList, { key: 'list' }),
    h(Footer, { key: 'footer' })
  ])

export default App
