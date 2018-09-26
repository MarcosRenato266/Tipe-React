import App from '../../components/App'
import Articles from '../../components/Articles'
import withData from '../../lib/withData'

export default withData(() => (
  <App>
    <section className="section page">
      <div>
        <h1 className="title">
          Blog
        </h1>
      </div>
     <Articles />
    </section>
  </App>
))