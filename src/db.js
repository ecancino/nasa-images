import Dexie from 'dexie'

const db = new Dexie('Audios')
db.version(1).stores({ audios: 'nasa_id,title,m4a,date_created' })

export const audios = db.table('audios')
