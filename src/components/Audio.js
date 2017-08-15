import { connect } from 'react-redux'
import Cassette from 'react-cassette-player'
import { merge, compose } from 'ramda'
import { css } from 'aphrodite'

import { styles, cassetteColors } from '../styles'
import { h } from '../helpers'
import { deleteAudio } from '../thunks'

const Audio = ({ nasa_id, title, asset, removeAudio }) =>
  h('li', { className: css(styles.audio), key: `audio-${nasa_id}` }, [
    h(Cassette, merge({ key: asset, src: asset }, cassetteColors)),
    h('button', { className: css(styles.btnDelete), key: 'btn', onClick: () => removeAudio(nasa_id) }, 'X'),
    h('h4', { className: css(styles.audioTitle, styles.orangered), key: 'spn' }, title)
  ])

const dispatchProps = dispatch => ({
  removeAudio: compose(dispatch, deleteAudio)
})

export default connect(null, dispatchProps)(Audio)
