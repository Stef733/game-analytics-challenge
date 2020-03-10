import { $, debounce, setItemToStore } from '../utils/utils.js'
import { searchForMovies } from '../apiClient/methods.js'
import { createMovieList } from '../movieList/movieList.js'

const search = debounce(e => {
  const query = e.target.value
  searchForMovies(query)
    .then(data => {
      const movies = data.results.splice(0, 6)

      setItemToStore('movies', movies)
      createMovieList(movies)
    })
}, 300)

export const attachSearchHandler = () => {
  $('#search-input').addEventListener('keydown', search)
}
