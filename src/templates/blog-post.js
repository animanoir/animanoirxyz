import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} className="page">
        <SEO
          title={post.frontmatter.title}
          canonical={post.frontmatter.canonical}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="post-content fade-in">
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>
          <div className="post-author">
            <Link to="/Acerca">
              <span>por Óscar A. Montiel</span>
            </Link>
          </div>
          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
        canonical
      }
    }
  }
`
