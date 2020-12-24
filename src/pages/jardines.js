import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import aos from 'aos'
import 'aos/dist/aos.css'
import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import '../utils/css/main.css'
import ReactPlayer from 'react-player'

import vid1 from '../../content/assets/projects/jardines/emma.webm'

const ZeyxLab = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <PageLayout title={siteTitle}>
      <SEO title="Jardines | Alquitrán [VR Experience]" />
      <div className="fade-in">
        <ReactPlayer width="100%" height="100%" loop playing muted url={vid1} />
      </div>
      <h1 className="page-title fade-in">
        Jardines | Alquitrán [VR Experience]
      </h1>
      <div data-aos={'fade-up'} className="page-txt-container">
        <h2 className="page-subtitle">
          A virtual, musical garden, with music by{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://otonolabel.bandcamp.com/album/alquitr-n"
          >
            Jardines
          </a>
        </h2>
        <p className="page-p">
          In colaboration with{' '}
          <a rel="noreferrer" target="_blank" href="http://maremoto.mx/">
            Maremoto
          </a>{' '}
          and{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://otono.space/jardines/"
          >
            OTONO Records
          </a>{' '}
          we developed a sonic world where the cosmonaut (you) can get lost
          searching the origin of our sentiments.
          <p>
            Enter{' '}
            <a target="_blank" rel="noreferrer" href="https://maremoto.mx/">
              here
            </a>{' '}
            to live it.
          </p>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3124227393/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://otonolabel.bandcamp.com/album/alquitr-n">Alquitrán by Jardines</a></iframe>`,
          }}
        ></div>
      </div>
    </PageLayout>
  )
}

export default ZeyxLab

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
