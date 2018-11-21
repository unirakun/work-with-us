import { queryOnMouseEnter } from '@work-with-us/ui-hoc'
import { Avatar } from '../../../../components'
import request from './who.request'

export default queryOnMouseEnter(request)(Avatar)
