import Dexie from 'dexie'

const db = new Dexie('Audios')
db.version(1).stores({ audios: 'nasa_id,title,asset,date_created,media_type' })

export const audios = db.table('audios')
