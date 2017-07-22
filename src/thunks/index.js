import { compose, assoc } from 'ramda'
import { showResults, removeResult, addAudio, removeAudio, setMessage } from '../actions'
import { apiCall, formatResults, fetchJSON, sortByTitle } from '../helpers'
import { dispatch } from '../store'
import { audios } from '../db'

const onAdd = compose(dispatch, addAudio)
const onMessage = compose(dispatch, setMessage)
const onRemoveAudio = compose(dispatch, removeAudio)
const onRemoveResult = compose(dispatch, removeResult)

const flashMessage = message => () => {
  onMessage(message)
  setTimeout(() => onMessage(''), 6000)
}

export const loadAudios = () => () =>
  audios.toArray()
    .then(sortByTitle)
    .then(onAdd)

const onReload = compose(dispatch, loadAudios)

export const saveAudio = audio => () =>
  audios.add(audio)
    .then(onReload)
    .catch(() => dispatch(flashMessage('Already added. Removing...')))
    .finally(() => onRemoveResult(audio.nasa_id))

export const deleteAudio = id => () =>
  audios.delete(id)
    .then(onReload)
    .then(() => onRemoveAudio(id))

export const audioSearch = q => dispatch =>
  apiCall('search', { q, media_type: 'audio' }) 
    .then(formatResults)
    .then(sortByTitle)
    .then(results => dispatch(showResults(results)))

export const fetchAudio = audio => dispatch =>
  fetchJSON(audio.href)
    .then(([, asset]) => assoc('asset', asset, audio))
    .then(m4a => dispatch(saveAudio(m4a)))
    .catch(() => dispatch(flashMessage(`Audio fetch failed for ${audio.title}`)))
