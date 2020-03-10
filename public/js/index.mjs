import { setItemToStore } from './utils/utils.js'
import { getAllMovies } from './apiClient/methods.js'
import { showAllMovies, attachMovieListButtonHandlers } from './movieList/movieList.js'
import { attachSearchHandler } from './search/index.js'

const init = async () => {
  window.appStore = {}

  const movies = await getAllMovies()
  setItemToStore('movies', movies.results.splice(0, 6))
  setItemToStore('favourites', new Set())

  attachMovieListButtonHandlers()
  attachSearchHandler()
  showAllMovies()
}

init()
