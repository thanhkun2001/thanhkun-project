import i18n from 'i18next'
import { useEffect } from 'react'
import { initReactI18next } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import en from './i18n/en.json'
import vi from './i18n/vi.json'
import { changeLanguage } from './redux/actions/languageAction'
import { BrowserRouter ,Routes,Route, Navigate } from 'react-router-dom'
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import HomePage from './pages/HomePage/HomePage'
import ProductDetail from './pages/Products/details/ProductDetail'
import { FORM_MODE, ROUTES } from './constants'
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
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
function App() {
  var LANG = 'en'
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.language)
  useEffect(() => {
    const defaultLanguage = localStorage.getItem('Language')
    if (defaultLanguage) {
      dispatch(changeLanguage(defaultLanguage))
    } else {
      dispatch(changeLanguage(window.LANG || 'en'))
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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}  />
      <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
