import React from 'react'
import { Link } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { logoutApi } from '../lib/apis';
import { push } from 'gatsby-link';
import { dummyabcAPI, registerAPI } from '../lib/apis';

const Header = ({ siteMetadata }) => (
  <div >
    <Container>
      <Grid.Column mobile={16} tablet={4} computer={4}>
        <h1 style={{ padding: '0rem', margin: '0rem' }}>
          <Link to="/">
            {siteMetadata.title}
          </Link>
        </h1>
        <Link to="/">
          {siteMetadata.subTitle}
        </Link>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={4} computer={4}>
        <Menu pointing secondary>
          <Menu.Item to='/' as={Link} activeClassName='active' >HOME</Menu.Item>
          <Menu.Item to='/page-2' as={Link} activeClassName='active' >Page 2</Menu.Item>
          <Menu.Item to='/404' as={Link} activeClassName='active' >404 Example page</Menu.Item>
          <Menu.Item to='/contactus' as={Link} activeClassName='active' >Contact Us</Menu.Item>
          <Menu.Item to='/aboutus' as={Link} activeClassName='active' >About Us</Menu.Item>
        </Menu>
      </Grid.Column>
      <Button onClick={() => {
        logoutApi()
        push('/login/');
      }}> LOGOUT </Button>

      <Button onClick={async () => {
        console.log('abc data', await dummyabcAPI());
      }}> GET dummy data </Button>

      <Button onClick={async () => {
        console.log('register api data', await registerAPI());
      }}> Register API </Button>

    </Container>

  </div>
)

export default Header
