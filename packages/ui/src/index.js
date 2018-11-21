import App from './app'
import theme from './theme'

if (typeof window !== 'undefined') {
  import('./client')
}

export { App, theme }
