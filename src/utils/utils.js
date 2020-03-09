const $ = query => {
  if (typeof query !== 'string') return null

  const identifier = query.substring(0, 1)
  const name = query.substring(1)

  switch (identifier) {
    case '.':
      return document.getElementById(name)
    case '#':
      return document.getElementsByClassName(name)
    default:
      return null
  }
}

module.exports = {
  $
}
