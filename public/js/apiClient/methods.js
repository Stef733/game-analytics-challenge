import apiClient from './apiClient.js'

// In a real world scenario there would be pagination and page arguments here
export const getAllMovies = () => {
  return apiClient.GET('4/list/1?page=1')
}

export const searchForMovies = (query = '') => {
  return apiClient.GET(`3/search/movie?query=${encodeURIComponent(query)}`)
}
