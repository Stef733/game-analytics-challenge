import { $ } from '../utils/utils.js'

export const createMovieListItem = ({
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
