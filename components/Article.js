import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Markdown from 'react-markdown'
import { withRouter } from 'next/router'

const Article = ({article}) => (
  <div className="content">
    <div>
      <h1 className="title">{article.title}</h1>
    </div>
    <div className="card">
      <div className="card-content">
        <Markdown source={article.body} />
      </div>
    </div>
  </div>
)


const allArticles = gql`
  query Articles {
    articles: allArticleExamples {
      title
      urlSlug
      body
      featuredImage {
        name
        url
      }
      author {
        ... on AuthorExample {
          name
          bio
        }
        _meta {
          id
        }
      }
      _meta {
        id
        name
      }
    }
  }
`


Article.defaultProps = {
  article: {}
}

export default withRouter(graphql(allArticles, {
  props: ({data, ownProps: {slug}}) => {
    if (!data.loading) {
      const article = data.articles.find(a => a.urlSlug === slug) || {}
      return {
        article
      }
    }
  }
})(Article))