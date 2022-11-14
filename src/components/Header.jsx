import { Radio } from 'antd'

import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeByMode } from '../helpers/common'
import { changeLanguage } from '../redux/actions/languageAction'
import './index.css'
import en from "../Images/languages/en.png"
import vn from "../Images/languages/vi.png"
import { useTranslation } from 'react-i18next'
const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.language)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const currentTheme = localStorage.getItem('ThanKun')
    if (currentTheme) {
      setTheme(currentTheme)
    }
  })
  const handleChangeLanguage = (lang) => {
    dispatch(changeLanguage(lang))
  }
  const handleToggleTheme = (e) => {
    setTheme(e.target.value)
    setThemeByMode(e.target.value)
  }
  return (
    <div className="header-content">
      <Radio.Group value={theme} onChange={handleToggleTheme} className="btn-toggle-theme">
        <Radio.Button value="light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.20675C12.3682 4.20675 12.6667 3.90827 12.6667 3.54008V1.27342C12.6667 0.905227 12.3682 0.60675 12 0.60675C11.6318 0.60675 11.3333 0.905227 11.3333 1.27342V3.54008C11.3333 3.90827 11.6318 4.20675 12 4.20675ZM5.78597 9.27507C6.85862 6.75451 9.34761 5.13159 12.0867 5.16675C15.7902 5.19609 18.7718 8.21647 18.7534 11.9201C18.7531 14.6594 17.0982 17.1272 14.564 18.1672C12.0298 19.2072 9.11839 18.6134 7.19396 16.6639C5.26952 14.7145 4.71333 11.7956 5.78597 9.27507ZM7.01727 14.0468C7.88317 16.0699 9.88637 17.3686 12.0867 17.3334C15.0513 17.3041 17.4349 14.8847 17.42 11.9201C17.4225 9.71946 16.0941 7.73581 14.0583 6.90012C12.0225 6.06443 9.68355 6.54261 8.13911 8.11022C6.59466 9.67783 6.15136 12.0237 7.01727 14.0468ZM11.3333 20.4601C11.3333 20.0919 11.6318 19.7934 12 19.7934C12.3682 19.7934 12.6667 20.0919 12.6667 20.4601V22.7267C12.6667 23.0949 12.3682 23.3934 12 23.3934C11.6318 23.3934 11.3333 23.0949 11.3333 22.7267V20.4601ZM5.54669 6.49342C5.67066 6.6061 5.8325 6.66799 6.00003 6.66675C6.17723 6.66778 6.34755 6.59821 6.47336 6.47342C6.59957 6.34824 6.67056 6.17784 6.67056 6.00009C6.67056 5.82233 6.59957 5.65193 6.47336 5.52675L4.88669 3.94675C4.62219 3.72024 4.2279 3.73547 3.98165 3.98171C3.7354 4.22796 3.72017 4.62225 3.94669 4.88675L5.54669 6.49342ZM17.8068 17.3335C18.0378 17.2716 18.2842 17.3376 18.4534 17.5068L20.0534 19.1134C20.3118 19.3734 20.3118 19.7934 20.0534 20.0534C19.9303 20.179 19.7625 20.2509 19.5867 20.2534C19.4085 20.2527 19.2381 20.1807 19.1133 20.0534L17.5067 18.4534C17.3376 18.2843 17.2715 18.0378 17.3334 17.8068C17.3953 17.5758 17.5758 17.3954 17.8068 17.3335ZM4.20669 12.0001C4.20669 11.6319 3.90821 11.3334 3.54002 11.3334H1.27336C0.905166 11.3334 0.606689 11.6319 0.606689 12.0001C0.606689 12.3683 0.905166 12.6668 1.27336 12.6668H3.54002C3.90821 12.6668 4.20669 12.3683 4.20669 12.0001ZM20.46 11.3334H22.7267C23.0949 11.3334 23.3933 11.6319 23.3933 12.0001C23.3933 12.3683 23.0949 12.6668 22.7267 12.6668H20.46C20.0918 12.6668 19.7933 12.3683 19.7933 12.0001C19.7933 11.6319 20.0918 11.3334 20.46 11.3334ZM5.54671 17.5067L3.94671 19.1134C3.75527 19.3033 3.69705 19.5898 3.79919 19.8393C3.90134 20.0889 4.14374 20.2523 4.41337 20.2534C4.59154 20.2527 4.76199 20.1807 4.88671 20.0534L6.49337 18.4534C6.75479 18.192 6.75479 17.7682 6.49337 17.5067C6.23196 17.2453 5.80812 17.2453 5.54671 17.5067ZM18.4733 6.47342C18.3475 6.59821 18.1772 6.66777 18 6.66675C17.8228 6.66777 17.6525 6.59821 17.5267 6.47342C17.4005 6.34824 17.3295 6.17784 17.3295 6.00008C17.3295 5.82232 17.4005 5.65193 17.5267 5.52675L19.1333 3.92675C19.3934 3.66827 19.8133 3.66827 20.0733 3.92675C20.3318 4.18677 20.3318 4.60672 20.0733 4.86675L18.4733 6.47342Z"
              fill="white"
            ></path>
          </svg>
        </Radio.Button>
        <Radio.Button value="dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 17.7534C20.2785 17.7255 20.5448 17.8746 20.6666 18.1267C20.7775 18.3623 20.7411 18.6409 20.5733 18.8401C18.6926 20.8983 16.028 22.0635 13.24 22.0467C7.67294 22.0467 3.15997 17.5338 3.15997 11.9667C3.15997 6.3997 7.67294 1.88673 13.24 1.88673C14.3763 1.88534 15.5042 2.0816 16.5733 2.46673C16.8331 2.55738 17.0106 2.79836 17.02 3.07339C17.0424 3.36006 16.8784 3.62879 16.6133 3.74006C13.499 5.14733 11.7697 8.51921 12.4439 11.8695C13.1181 15.2198 16.0171 17.6603 19.4333 17.7534H20ZM4.5133 12.0001C4.5133 16.8307 8.42931 20.7467 13.26 20.7467C15.1151 20.7569 16.9226 20.1598 18.4066 19.0467C14.8701 18.5692 11.9878 15.9728 11.1449 12.5052C10.3019 9.03757 11.6706 5.40774 14.5933 3.36006C14.1527 3.28675 13.7066 3.25106 13.26 3.25339C8.42931 3.25339 4.5133 7.16941 4.5133 12.0001Z"
              fill="#171A23"
            ></path>
          </svg>
        </Radio.Button>
      </Radio.Group>
      <div>
        <Dropdown className="header-dropdown header-language">
          <Dropdown.Toggle id="dropdown-language">
            <img src={language === 'vi' ? vn : en} width="30" />
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight={true}>
            <Dropdown.Item
              className={language === 'en' ? 'active' : ''}
              onClick={() => handleChangeLanguage('en')}
            >
              <img className="mr-2" src={en} width="26" />
              <span className="fs-14">English</span>
            </Dropdown.Item>
            <Dropdown.Item
              className={language === 'vi' ? 'active' : ''}
              onClick={() => handleChangeLanguage('vi')}
            >
              <img className="mr-2" src={vn} width="26" />
              <span className="fs-14">Vietnamese</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <h1>{t('HEADER.HELLO')}</h1>
    </div>
  )
}

export default Header
