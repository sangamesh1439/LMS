import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            subTitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header siteMetadata = {data.site.siteMetadata} />

        <Container>
        <Grid relaxed stackable>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                {children}
              </Grid.Column>
            </Grid>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
