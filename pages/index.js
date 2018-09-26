import App from '../components/App'
import Homepage from '../components/Homepage'
import withData from '../lib/withData'

export default withData(() => (
  <App>
    <Homepage />
  </App>
))