import $ from 'jquery'
export const setThemeByMode = (mode = 'dark') => {
    const antdStyle = mode === 'light' ? '/vendor/antd/antd.css' : '/vendor/antd/antd.dark.css';
    $('#antdStyleSheet').attr('href',antdStyle)
    $('body').removeClass('light')
    $('body').removeClass('dark')
    $('body').addClass(mode)
    localStorage.setItem('ThanKun',mode)
}