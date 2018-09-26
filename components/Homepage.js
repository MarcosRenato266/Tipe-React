import { withRouter } from 'next/router';
import React, { Component } from 'react';
import Markdown from 'react-markdown';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Homepage extends Component {
  static defaultProps = {
    page: {},
    tweet: {}
  };

  render() {
    console.log(this.props);
    return (
      <section>
        <h1>Heading: {this.props.data.hero.heading}</h1>
        <h4>Description: {this.props.data.hero.description}</h4>
        cta: {this.props.data.hero.cta}
      </section>
    );
  }
}


export const homePage = gql`
  query API {
    Homepage(id: "5babdb71bc8ce1001316c675") {
      hero {
        heading
        description
        cta
      }

      _meta {
        id
        name
        updatedAt
        createdAt
        published
      }
    }
  }
`

export default graphql(homePage, {
  props: ({ data }) => {
    if (!data.loading) {
      return {
        data: data.Homepage
      }
    }
  }
})(Homepage);
