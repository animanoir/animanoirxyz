import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import FloatingLogo from '../components/FloatingLogo'
import PostCard from '../components/Pagecard'

class TagPageTemplate extends React.Component {
  render() {
    // const props = this.props
    const tag = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={`#${tag}`}
          title={`#${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
          keywords={[
            `${tag}`,
            `animanoir`,
            `blog`,
            `Óscar A. Montiel`,
            `animación`,
            `animation`,
            'interactive',
            'creative',
            'developer',
            '3d',
            '2d',
            'idm',
            'unity',
            'three js',
            'art',
            'ghosts',
            'fantasmas',
            'arte digital',
            'digital art',
            'interacción',
            'frontend',
            'react',
            'html 5',
            'web developer',
            'creative agencies',
            'web developer portafolio',
            'website developer',
            'creative studio',
            'web design',
            'graphic designers',
            'interactive design',
            'freelance web developer',
            'desarrollo web',
            'diseño interactivo',
            'web interactiva',
            'programador',
            'animador',
          ]}
        />
        <FloatingLogo />
        <header className="tag-page-head">
          <h1 className="tag-head-title">{`#${
            tag.charAt(0).toUpperCase() + tag.slice(1)
          }`}</h1>
        </header>
        <div className="page-feed">
          {posts.map(({ node }) => {
            return (
              <PostCard key={node.fields.slug} node={node} postClass={`post`} />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query PostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }
  }
`
