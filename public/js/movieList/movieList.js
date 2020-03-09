import { $ } from '../utils/utils.js'
import { getAllMovies } from '../apiClient/methods.js'

const IMAGE_BASE_URL = 'https://www.image.tmdb.org'

const createMovieListElement = ({
  title,
  year,
  description,
  imageHref,
  rating
}) => {
  // Create DOM nodes
  const wrapperDiv = document.createElement('DIV')
  wrapperDiv.classList.add('movies-list__movie-wrapper')

  const posterImg = document.createElement('IMG')
  posterImg.classList.add('movies-list__movie-image')
  posterImg.setAttribute('src', imageHref)
  posterImg.setAttribute('alt', 'Poster for ' + title)

  const descriptionWrapperDiv = document.createElement('DIV')
  descriptionWrapperDiv.classList.add('movies-list__description-wrapper')

  const titleH1 = document.createElement('H1')
  titleH1.classList.add('movies-list__movie-title')
  titleH1.appendChild(document.createTextNode(title))

  const yearSpan = document.createElement('SPAN')
  yearSpan.classList.add('movies-list__movie-year')
  yearSpan.appendChild(document.createTextNode(year))

  const movieDescriptionP = document.createElement('P')
  movieDescriptionP.classList.add('movies-list__movie-description')
  movieDescriptionP.appendChild(document.createTextNode(description))

  // Assemble DOM nodes
  wrapperDiv.appendChild(posterImg)
  wrapperDiv.appendChild(descriptionWrapperDiv)
  descriptionWrapperDiv.appendChild(titleH1)
  titleH1.appendChild(yearSpan)
  descriptionWrapperDiv.appendChild(movieDescriptionP)

  // Attach to root node
  const moviesList = $('.movie-list__movies')[0]
  moviesList.appendChild(wrapperDiv)
}

export const showAllMovies = () => {
  getAllMovies()
    .then(data => {
      const movies = data.results.splice(0, 6)

      if (movies.length) {
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
    })
}
