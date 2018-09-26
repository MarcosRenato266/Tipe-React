import App from '../components/App'
import Hero from '../components/Hero'
import withData from '../lib/withData'

export default withData(() => (
  <App>
    <Hero />
  </App>
))