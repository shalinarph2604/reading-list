import api from './axios'

export async function getBookByKey(key: string) {
  const response = await api.get(`${key}.json`)
  return response.data
}

export async function getBooks() {
  const response = await api.get('')
  return response.data.works || []
}