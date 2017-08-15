import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { map, merge, compose } from 'ramda'
import { css } from 'aphrodite'

import Audio from './Audio'
import { styles } from '../styles'
import { h } from '../helpers'
import { dispatch } from '../store'
import { loadAudios } from '../thunks'

const createAudio = audio => h(Audio, merge(audio, { key: audio.nasa_id }))

const PlayList = ({ playlist }) =>
  h('section', { className: css(styles.playlist) }, [
    h('ul', { className: css(styles.audios), key: 'list' },
      map(createAudio, playlist)
    )
  ])

const onMount = lifecycle({
  componentDidMount() {
    dispatch(loadAudios())
  }
})

const stateProps = ({ playlist }) => ({ playlist })

const enhance = compose(onMount, connect(stateProps))

export default enhance(PlayList)
