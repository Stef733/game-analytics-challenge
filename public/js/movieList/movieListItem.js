import { $, setItemToStore, getItemFromStore } from '../utils/utils.js'

const createPosterEl = (title, imageHref, rating) => {
  const imgWrapper = document.createElement('div')
  imgWrapper.classList.add('movie-list__img-wrapper')

  const posterImg = document.createElement('IMG')
  posterImg.classList.add('movie-list__movie-image')
  posterImg.setAttribute('src', imageHref)
  posterImg.setAttribute('alt', 'Poster for ' + title)

  const ratingDiv = document.createElement('DIV')
  ratingDiv.classList.add('movie-list__rating')
  ratingDiv.appendChild(document.createTextNode(`${rating * 10}%`))

  imgWrapper.appendChild(ratingDiv)
  imgWrapper.appendChild(posterImg)

  return imgWrapper
}

const createDescriptionEl = (title, year, description) => {
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

  descriptionWrapperDiv.appendChild(titleH2)
  titleH2.appendChild(yearSpan)
  descriptionWrapperDiv.appendChild(movieDescriptionP)

  return descriptionWrapperDiv
}

const createSidebarEl = id => {
  const sidebarDiv = document.createElement('DIV')
  sidebarDiv.classList.add('movie-list__movie-sidebar')

  const favouriteButton = document.createElement('button')
  favouriteButton.classList.add('movie-list__sidebar-btn')
  favouriteButton.appendChild(document.createTextNode('Favourite'))
  const favourites = getItemFromStore('favourites')
  favouriteButton.addEventListener('click', () => setItemToStore('favourites', favourites.add(id)))

  const moreButton = document.createElement('button')
  moreButton.classList.add('movie-list__sidebar-btn')
  moreButton.appendChild(document.createTextNode('More'))

  sidebarDiv.appendChild(favouriteButton)
  sidebarDiv.appendChild(moreButton)

  return sidebarDiv
}

export const createMovieListItem = ({
  title,
  year,
  description,
  imageHref,
  rating,
  id
}) => {
  // Create DOM nodes
  const wrapperDiv = document.createElement('DIV')
  wrapperDiv.classList.add('movie-list__movie-wrapper')

  const posterEl = createPosterEl(title, imageHref, rating)
  const descriptionEl = createDescriptionEl(title, year, description)
  const sidebarEl = createSidebarEl(id)

  // Assemble DOM nodes
  wrapperDiv.append(posterEl)
  wrapperDiv.appendChild(descriptionEl)
  wrapperDiv.appendChild(sidebarEl)

  // Attach to root node
  const moviesList = $('.movie-list__movies')[0]
  moviesList.appendChild(wrapperDiv)
}
