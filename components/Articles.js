import {Link} from '../routes'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Article = ({article}) => (
  <div className="column is-6">
    <Link prefetch route='article' params={{article: article.urlSlug}}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img
              src={article.featuredImage.url}
              alt={article.featuredImage.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{ article.author.name }</p>
            </div>
          </div>
          <div className="content">
            <h2 className="title">{ article.title }</h2>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .card {
        cursor: pointer;
      }
    `}</style>
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


const Articles = ({articles}) => (
  <div className="columns is-centered is-multiline bloglist">
    {articles.map(article => (
      <Article article={article} key={article._meta.id} />
    ))}
    <style jsx>{`
      .bloglist {
        padding: 0px 15rem;
      }
      .card {
        cursor: pointer;
      }
    `}</style>
  </div>  
)

Articles.defaultProps = {
  articles: []
}

export default graphql(allArticles, {
  props: ({data}) => {
    if (!data.loading) {
      return {
        articles: data.articles
      }
    }
  }
})(Articles)