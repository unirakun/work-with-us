import dayjs from 'dayjs'

const Age = ({ children, from, suffix }) => `${dayjs(Date.now()).diff(dayjs(children || from), 'year')}${suffix}`

export default Age
