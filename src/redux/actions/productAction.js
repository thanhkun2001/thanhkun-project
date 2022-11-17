import ProductApi from "../../services/productApi";
import { GET_PRODUCT, GET_PRODUCT_DETAIL } from "../types";


export const getAllProduct = () => {
    return async dispatch => {
        try {
            const res = await ProductApi.getAll()
            dispatch({
                type: GET_PRODUCT,
                payload: res
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getProductDetails = (id) => {
    return async dispatch => {
        try {
            const res = await ProductApi.getDetails(id)
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: res
            })
        } catch (error) {
            console.log(error);
        }
    }
}