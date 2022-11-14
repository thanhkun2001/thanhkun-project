import i18n from 'i18next'
import { useEffect } from 'react'
import { initReactI18next } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import en from './i18n/en.json'
import vi from './i18n/vi.json'
import { changeLanguage } from './redux/actions/languageAction'
const resource = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
}
i18n.use(initReactI18next).init({
  resources: resource,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
})
function App() {
  var LANG = 'vi'
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.language)
  useEffect(() => {
    const defaultLanguage = localStorage.getItem('Language')
    if (defaultLanguage) {
      dispatch(changeLanguage(defaultLanguage))
    } else {
      dispatch(changeLanguage(window.LANG || 'vi'))
    }
  }, [])
  useEffect(() => {
    if (language) {
      i18n.use(initReactI18next).init({
        resources: resource,
        lng: language,
        fallbackLng: window.LANG,
        interpolation: {
          escapeValue: false,
        },
      })
    }
  }, [language])
  return (
    <>
      <Header />
    </>
  )
}

export default App
