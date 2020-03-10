import { $, getItemFromStore } from '../utils/utils.js'

import { createMovieListItem } from './movieListItem.js'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w92'

export const createMovieList = movies => {
  $('.movie-list__movies')[0].innerHTML = ''

  movies.forEach(({
    // eslint-disable-next-line camelcase
    original_title,
    // eslint-disable-next-line camelcase
    release_date,
    overview,
    // eslint-disable-next-line camelcase
    vote_average,
    // eslint-disable-next-line camelcase
    poster_path,
    id
  }) => {
    createMovieListItem({
      title: original_title,
      year: release_date.substr(0, 4),
      description: overview,
      rating: vote_average,
      // eslint-disable-next-line camelcase
      imageHref: IMAGE_BASE_URL + poster_path,
      id
    })
  })
}

const updateMovieListCount = (showing, total) => {
  const subtitleEl = $('.movie-list__subtitle')[0]
  subtitleEl.innerHTML = ''
  const subtitleTextNode = document.createTextNode(`Showing ${showing} out of ${total} films`)
  subtitleEl.appendChild(subtitleTextNode)
}

const sortByVotes = () => {
  const movies = getItemFromStore('movies') || []

  const sortedMovies = movies.sort((movieA, movieB) => movieA.popularity - movieB.popularity)
  createMovieList(sortedMovies)
}

export const showAllMovies = () => {
  const movies = getItemFromStore('movies') || []

  createMovieList(movies)
  updateMovieListCount(movies.length, 6)
}

const showFavourites = () => {
  const movies = getItemFromStore('movies') || []
  const favouriteMovies = movies.filter(movie => getItemFromStore('favourites').has(movie.id))

  createMovieList(favouriteMovies)
  updateMovieListCount(movies.length, 6)
}

const handleSortChange = e => {
  switch (e.target.value) {
    case 'votes':
      sortByVotes()
      break
    default:
      showAllMovies()
  }
}

const handleFilterChange = e => {
  switch (e.target.value) {
    case 'favourites':
      showFavourites()
      break
    default:
      showAllMovies()
  }
}

export const attachMovieListButtonHandlers = () => {
  $('#movies-sort-select').addEventListener('change', handleSortChange)
  $('#movies-filter-select').addEventListener('change', handleFilterChange)
}
