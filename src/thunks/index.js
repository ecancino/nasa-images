import { compose, assoc } from 'ramda'
import { showResults, removeResult, addAudio, removeAudio } from '../actions'
import { apiCall, formatResults, fetchJSON, log } from '../helpers'
import { dispatch } from '../store'
import { audios } from '../db'

const onAdd = compose(dispatch, addAudio)
const onRemoveAudio = compose(dispatch, removeAudio)
const onRemoveResult = compose(dispatch, removeResult)

export const loadAudios = () => () =>
  audios.toArray()
    .then(onAdd)

const onReload = compose(dispatch, loadAudios)

export const saveAudio = audio => () =>
  audios.add(audio)
    .then(onReload)
    .catch(() => log('Already added. Removing...'))
    .finally(() => onRemoveResult(audio.nasa_id))

export const deleteAudio = id => () =>
  audios.delete(id)
    .then(onReload)
    .then(() => onRemoveAudio(id))

export const imageSearch = q => dispatch =>
  apiCall('search', { q, media_type: 'audio' })
    .then(formatResults)
    .then(results => dispatch(showResults(results)))

export const fetchAudio = audio => dispatch =>
  fetchJSON(audio.href)
    .then(([, m4a_128]) => assoc('m4a', m4a_128, audio))
    .then(m4a => dispatch(saveAudio(m4a)))
    .catch(err => log(`Audio fetch failed for ${audio.title}: ${err.message}`))
