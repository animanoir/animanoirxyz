import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

// import "../utils/global.scss"
import '../utils/css/main.css'

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct

  return (
    <Layout title={siteTitle}>
      <SEO title="Tags" />
      <header className="tag-page-head">
        <h1 className="post-content-title">Tags</h1>
      </header>
      <div className="tag-container">
        {tags.map((tag) => {
          return (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <div className="tag-item">· {tag}</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default (props) => (
  <StaticQuery query={indexQuery} render={(data) => <TagIndex data={data} />} />
)
