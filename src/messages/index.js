import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'

import { browserLocale } from '../helpers'

import enUS from './enUS'
import esES from './esES'
import frFR from './frFR'

addLocaleData([...en, ...es, ...fr])

export let locale = browserLocale()

export const messages = {
  en: enUS, 'en-US': enUS,
  es: esES, 'es-ES': esES,
  fr: frFR, 'fr-FR': frFR
}[locale]
