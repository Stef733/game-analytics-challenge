import bearerToken from './bearerToken.js'

const BASE_URL = 'https://api.themoviedb.org/4'

const authHeaders = {
  Authorization: 'Bearer ' + bearerToken,
  'Content-Type': 'application/json;charset=utf-8'
}

export const GET = (path, request) =>
  fetch(BASE_URL + path, {
    ...request,
    headers: {
      ...request.headers,
      ...authHeaders
    },
    type: 'GET'
  })

export default {
  GET
}
