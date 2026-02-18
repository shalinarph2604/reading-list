import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://openlibrary.org/subjects/science_fiction.json?',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
