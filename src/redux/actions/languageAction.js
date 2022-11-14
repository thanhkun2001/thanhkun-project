import { LANGUAGE_CHANGE } from '../types'

export const changeLanguage = (language) => {
  return {
    type: LANGUAGE_CHANGE,
    language,
  }
}
