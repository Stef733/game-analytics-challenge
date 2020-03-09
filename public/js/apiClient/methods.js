import apiClient from './apiClient.js'

// In a real world scenario there would be pagination and page arguments here
export const getAllMovies = (sortByVotes = false) => {
  const sortQueryParam = sortByVotes ? '&vote_average.desc' : ''

  apiClient.GET(`list/1?page=1${sortQueryParam}`)
}
