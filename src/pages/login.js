import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { withPrefix } from 'gatsby-link';
import { Link } from 'gatsby'
import {loginApi} from '../lib/apis';
import { push } from 'gatsby-link';

class LoginForm extends React.Component {
  render = () => {
    return (
      <div className='login-form' style={{ backgroundSize: "40% 50%", backgroundImage: `url(${withPrefix('/images/loginBack.jpg')})` }}>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment stacked>
                <Header as='h2' textAlign='center'>
                  Log-in to your account
        </Header>
                <Form.Input onChange={(e) => {
                  this.setState({ identifier: e.target.value });
                }} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large' onClick={async() => {
                  await loginApi(this.state);
                  push('/home/');
                }}>
                  Login
            </Button>
              </Segment>
            </Form>
            <Message>
              <Link to="/register">
                New to us?
    
          </Link>
            </Message>
          </Grid.Column>
        </Grid>  </div>
    )
  }
}

export default LoginForm