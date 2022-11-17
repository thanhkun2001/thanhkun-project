import { GET_PRODUCT, GET_PRODUCT_DETAIL } from "../types";

const INITIAL_VALUE = {
    listProduct : [],
    listProductDetails:null,
}

export default (state = INITIAL_VALUE,action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                listProduct: action.payload
            }
            case GET_PRODUCT_DETAIL:
                return {
                    ...state,
                    listProductDetails: action.payload
                }
        default:
           return state
    }
}