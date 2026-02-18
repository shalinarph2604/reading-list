import api from './axios'

export async function getBookById(cover_id: number) {
  const response = await api.get(`limit=20&eq.${cover_id}`)
  console.log(response.data)
  return response.data[0] ?? null
}

export async function getBooks() {
  const response = await api.get('limit=20')
  console.log(response.data)
  return response.data
}