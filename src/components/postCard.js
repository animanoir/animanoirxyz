import React, { Component } from "react"
import { Link } from "gatsby"
import Tags from "./tag"

export default props => (
  <article
    className={`post-card  ${props.postClass} no-image fade-in`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
      }
    }
  >
    <ContentNoImage props={props} />
  </article>
)

class ContentNoImage extends Component {
  render() {
    const { props } = this.props
    return (
      <div className="post-card-content">
        <div>
          <Tags tags={props.node.frontmatter.tags} />
        </div>
        <div>
          <Link to={props.node.fields.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
          </Link>
        </div>
      </div>
    )
  }
}

// class ContentWithImage extends Component {
//   render() {
//     const { props } = this.props
//     return (
//       <Link to={props.node.fields.slug} className="post-card-link">
//         <div className="post-card-content">
//           <h2 className="post-card-title">
//             {props.node.frontmatter.title || props.node.fields.slug}
//           </h2>
//         </div>
//       </Link>
//     )
//   }
// }
