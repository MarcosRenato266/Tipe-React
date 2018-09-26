import { withRouter } from 'next/router'
import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Hero extends Component {
  static defaultProps = {
    page: {},
    tweet: {}
  }
  componentDidMount() {
    const {tweet} = this.props
    if (window.twttr.widgets) {
      window.twttr.widgets.createShareButton(
        '/',
        this.twitterBtn,
        {
          text: tweet.message,
          url: tweet.url,
          hashtags: tweet.hashtags
        }
      )
    }
  }
  render () {
    return (
      <section className="hero">
      <style jsx>{`
        .hero {
          height: 80vh;
        }
      `}</style>
        <div className="hero-body is-light">
          <div className="columns is-centered is-multiline">
    
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=256" alt="Tipe, content backend for all your apps" />
              </figure>
              <h2 className="subtitle">Tipe</h2>
            </div>
    
            <div className="column is-1 is-narrow has-text-centered">
              <h1 className="title">+</h1>
            </div>
    
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/react.png?w=256" alt="React js" />
              </figure>
              <h2 className="subtitle">React</h2>
            </div>
            <div className="column is-1 is-narrow has-text-centered">
              <h1 className="title">+</h1>
            </div>
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/graphql.png?w=256" alt="GraphQL" />
              </figure>
              <h2 className="subtitle">GraphQL</h2>
            </div>
    
            <div className="column is-12">
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="content is-large">
                    <Markdown source={this.props.page.mainContent} />
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="columns">
                <div className="column is-narrow">
                  <a className="button is-primary" href="https://tipe.io" target="_blank">
                    Sign up
                  </a>
                </div>
                <div className="column is-narrow">
                  <a className="button is-primary is-outlined" href="https://docs.tipe.io" target="_blank">
                    {this.props.page.headerCtaText}
                  </a>
                </div>
                <div className="column is-narrow">
                  <a className="button is-text" ref={(e) => this.twitterBtn = e}></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export const homePage = gql`
  query Pages {
    pages: allPageExamples {
      headerCtaText
      mainContent
      _meta {
        id
        name
      }
    }
    tweets: allTweetExamples {
      message
      url
      hashtags
    }
  }
`

export default graphql(homePage, {
  props: ({data}) => {
    if (!data.loading) {
      return {
        page: data.pages[0],
        tweet: data.tweets[0]
      }
    }
  }
})(Hero)