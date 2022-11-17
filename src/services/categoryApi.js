import { get } from 'jquery'
import { APIS_URL } from '../constants'
import globalAxios from './API'

const categoryApi = {
  getAll(params) {
    const url = APIS_URL.CATEGORIES
    return globalAxios.get(url, { params: params })
  },
  get(id) {
    const url = APIS_URL.CATEGORIES + '/' + id
    return globalAxios.get(url)
  },
  add(data) {
    const url = APIS_URL.CATEGORIES
    return globalAxios.post(url,data)
  },
  update(data) {
    const url = APIS_URL.CATEGORIES + '/' + data.id
    return globalAxios.put(url,data)
  },
  remove(id) {
    const url = APIS_URL.CATEGORIES + '/' + id
    return globalAxios.delete(url)
  },
}

export default categoryApi
