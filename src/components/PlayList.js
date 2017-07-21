import { connect } from 'react-redux'
import { map, merge, compose, curry } from 'ramda'
import { css } from 'aphrodite'

import Audio from './Audio'
import { styles } from '../styles'
import { h } from '../helpers'
import { deleteAudio } from '../thunks'

const createAudio = curry((removeAudio, audio) =>
  h(Audio, merge(audio, {
    key: audio.nasa_id,
    removeAudio: () => removeAudio(audio.nasa_id)
  }))
)

const PlayList = ({ playlist, removeAudio }) =>
  h('section', { className: css(styles.playlist) }, [
    h('ul', { className: css(styles.audios), key: 'list' },
      map(createAudio(removeAudio), playlist)
    )
  ])

const stateProps = ({ playlist }) => ({ playlist })
const dispatchProps = dispatch => ({
  removeAudio: compose(dispatch, deleteAudio)
})

export default connect(stateProps, dispatchProps)(PlayList)
