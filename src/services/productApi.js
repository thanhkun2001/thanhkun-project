import { APIS_URL } from '../constants'
import globalAxios from './API'

const ProductApi = {
  async getAll(params) {
    const url = APIS_URL.PRODUCTS
    const result = await globalAxios.get(url, { params: params })
    return result
  },
  async getDetails(id) {
    const url = APIS_URL.PRODUCTS + '/' + id
    const result = await globalAxios.get(url)
    return result
  },
  add(data) {
    const url = APIS_URL.PRODUCTS
    return globalAxios.post(url, data)
  },
  update(data) {
    const url = APIS_URL.PRODUCTS + '/' + data.id
    return globalAxios.put(url, data)
  },
  remove(id) {
    const url = APIS_URL.PRODUCTS + '/' + id
    return globalAxios.delete(url)
  },
}

export default ProductApi
