import { LANGUAGE_CHANGE } from "../types"

const INITIAL_VALUE = {
    language:'en'
}
export default (state = INITIAL_VALUE,action) => {
    console.log(state,action)
    switch (action.type) {
        case LANGUAGE_CHANGE:
            localStorage.setItem('LANGUAGE',action.language)
            return {
                ...state,
                language:action.language
            }
            
        default:
           return state
    }
}