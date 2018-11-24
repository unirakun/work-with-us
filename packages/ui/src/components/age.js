import dayjs from 'dayjs'

const Age = ({ children, from, suffix }) => {
  if (!children && !from) return null
  return `${dayjs(Date.now()).diff(dayjs(children || from), 'year')}${suffix}`
}

export default Age
