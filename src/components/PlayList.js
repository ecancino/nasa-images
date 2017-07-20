import { map, merge } from 'ramda'
import { css } from 'aphrodite';

import Audio from './Audio'
import { styles } from '../styles'
import { h } from '../helpers'

const mapAudios = map(audio => h(Audio, merge(audio, { key: audio.nasa_id })))

const PlayList = ({ playlist }) =>
  h('section', { className: css(styles.playlist) }, [
    h('ul', { className: css(styles.audios), key: 'list' }, mapAudios(playlist))
  ]);

export default PlayList
