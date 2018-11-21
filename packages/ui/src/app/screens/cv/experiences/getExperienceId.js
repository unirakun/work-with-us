const getId = (item) => {
  if (Array.isArray(item)) return `${getId(item[0])}-array`
  return `${item.title}-${item.dates.from}`
}

getId.withHash = (...args) => {
  const id = getId(...args)
  return `#${id}`
}

export default getId
