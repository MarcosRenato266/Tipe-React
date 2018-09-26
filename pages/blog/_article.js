import App from '../../components/App'
import Article from '../../components/Article'
import withData from '../../lib/withData'
import React, { Component } from 'react'

class ArticlePage extends Component {
  static async getInitialProps ({query}) {
    return {
      slug: query.article
    }
  }

  render () {
    return (
      <App>
        <section className="section page">
          <Article slug={this.props.slug} />
        </section>
        <style jsx>{`
          .page {
            padding: 5rem 10rem;
          }
        `}</style>
      </App>
    )
  }
}

export default withData(ArticlePage)