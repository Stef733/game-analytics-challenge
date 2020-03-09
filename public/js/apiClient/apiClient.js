import bearerToken from './bearerToken.js'

const BASE_URL = 'https://api.themoviedb.org/4'

const headers = {
  Authorization: 'Bearer ' + bearerToken,
  'Content-Type': 'application/json;charset=utf-8'
}

// In a real world scenario there would be pagination and page arguments here
export const getAllMovies = (sortByVotes = false) => {
  const sortQueryParam = sortByVotes ? '&vote_average.desc' : ''

  fetch(`${BASE_URL}/list/1?page=1${sortQueryParam}`, { headers })
}
