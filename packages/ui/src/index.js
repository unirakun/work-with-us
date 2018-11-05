import App from './app'
import theme from './theme'
//  import 'normalize.css'

if (typeof window !== 'undefined') {
  import('./client')
}

export { App, theme }
