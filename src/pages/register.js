import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { withPrefix } from 'gatsby-link';
import { Link } from 'gatsby'

const registrationForm = () => (
  <div className='registration-form' style={{ "background-size": "40% 50%", backgroundImage: `url(${withPrefix('/images/loginBack.jpg')})` }}>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.registration-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large'>
          <Segment stacked>
            <Header as='h2' textAlign='center'>
              Register for new account
        </Header>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Register
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

export default registrationForm