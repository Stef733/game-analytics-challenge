import { $ } from '../utils/utils.js'
import { getAllMovies } from '../apiClient/methods.js'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w92'

const createMovieListElement = ({
  title,
  year,
  description,
  imageHref,
  rating
}) => {
  // Create DOM nodes
  const wrapperDiv = document.createElement('DIV')
  wrapperDiv.classList.add('movie-list__movie-wrapper')

  const posterImg = document.createElement('IMG')
  posterImg.classList.add('movie-list__movie-image')
  posterImg.setAttribute('src', imageHref)
  posterImg.setAttribute('alt', 'Poster for ' + title)

  const descriptionWrapperDiv = document.createElement('DIV')
  descriptionWrapperDiv.classList.add('movie-list__description-wrapper')

  const titleH2 = document.createElement('H2')
  titleH2.classList.add('movie-list__movie-title')
  titleH2.appendChild(document.createTextNode(title))

  const yearSpan = document.createElement('SPAN')
  yearSpan.classList.add('movie-list__movie-year')
  yearSpan.appendChild(document.createTextNode(`(${year})`))

  const movieDescriptionP = document.createElement('P')
  movieDescriptionP.classList.add('movie-list__movie-description')
  movieDescriptionP.appendChild(document.createTextNode(description))

  // Assemble DOM nodes
  wrapperDiv.appendChild(posterImg)
  wrapperDiv.appendChild(descriptionWrapperDiv)
  descriptionWrapperDiv.appendChild(titleH2)
  titleH2.appendChild(yearSpan)
  descriptionWrapperDiv.appendChild(movieDescriptionP)

  // Attach to root node
  const moviesList = $('.movie-list__movies')[0]
  moviesList.appendChild(wrapperDiv)
}

const createMovieList = movies => {
  movies.forEach(({
    // eslint-disable-next-line camelcase
    original_title,
    // eslint-disable-next-line camelcase
    release_date,
    overview,
    popularity,
    // eslint-disable-next-line camelcase
    poster_path
  }) => {
    createMovieListElement({
      title: original_title,
      year: release_date.substr(0, 4),
      description: overview,
      rating: popularity,
      // eslint-disable-next-line camelcase
      imageHref: IMAGE_BASE_URL + poster_path
    })
  })
}

const updateMovieListCount = (showing, total) => {
  const subtitleEl = $('.movie-list__subtitle')[0]
  subtitleEl.innerHTML = ''
  const subtitleTextNode = document.createTextNode(`Showing ${showing} out of ${total} films`)
  subtitleEl.appendChild(subtitleTextNode)
}

export const showAllMovies = () => {
  getAllMovies()
    .then(data => {
      const movies = data.results.splice(0, 6)

      if (movies.length) createMovieList(movies)
      updateMovieListCount(movies.length, 6)
    })
}
