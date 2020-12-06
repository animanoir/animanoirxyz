import React, { Component } from 'react'
import { Link } from 'gatsby'
import Tags from './tag'

const Pagecard = ({ title, bgImage, link, tags }) => (
  <article
    className="post-card fade-in"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="page-card-content">
      <div>
        <Link to={link} className="page-card-link">
          <h2 className="page-card-title">{title}</h2>
        </Link>
      </div>
    </div>
  </article>
)

export default Pagecard

// export default (props) => {
//     return(
//       <article
//         className='post-card fade-in'
//         style={backgroundImage: `url(${bgImage})`,
//         }
//       >
//         <ContentNoImage props={props} />
//       </article>
//     )
// }

// class ContentNoImage extends Component {
//   render() {
//     const { props } = this.props
//     return (
//     )
//   }
// }

// class ContentWithImage extends Component {
//   render() {
//     const { props } = this.props
//     return (
//       <Link to={props.node.fields.slug} className="post-card-link">
//         <div className="page-card-content">
//           <h2 className="page-card-title">
//             {props.node.frontmatter.title || props.node.fields.slug}
//           </h2>
//         </div>
//       </Link>
//     )
//   }
// }
