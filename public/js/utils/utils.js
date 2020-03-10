export const $ = query => {
  if (typeof query !== 'string') return null

  const identifier = query.substring(0, 1)
  const name = query.substring(1)

  switch (identifier) {
    case '#':
      return document.getElementById(name)
    case '.':
      return document.getElementsByClassName(name)
    default:
      return null
  }
}

// Debounce function by David Walsh
export const debounce = (func, wait, immediate) => {
  var timeout
  return function () {
    const context = this
    const args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// In a real world app you wouldn't have the store as an object on window
// Event listeners can be added to this for async handling
export const setItemToStore = (key, value) => {
  window.appStore[key] = value
}

export const getItemFromStore = key => (
  window.appStore[key]
)

export const deleteItemFromStore = key => {
  delete window.appStore[key]
}
