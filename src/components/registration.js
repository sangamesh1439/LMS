import React from 'react'
import { Tab, Form, Checkbox, Button, Grid } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Individual Registration', render: () =>
    <Tab.Pane attached={false}>
      <Form style={{'text-align':'left'}}>
        <Form.Field>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <label>Aadhaar Number</label>
              <input placeholder='Enter your 16-digit Aadhaar Number' />
            </Grid.Column>
            <Grid.Column>
              <Button style={{'background-color':'#663399', 'color':'white', 'text-align':'center', 'margin-top':'20px'}} size='small' type='submit'> Generate OTP </Button>
            </Grid.Column>
            <Grid.Column>
              <label>Enter OTP</label>
              <input placeholder='Enter OTP' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Enter Your User Name' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Enter Your User Name' />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type='password' placeholder='Enter the password again' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button style={{'width':'100%', 'background-color':'#663399', 'color':'white'}} size='large' type='submit' onClick={()=>{
          document.getElementById('registration').style.display = 'none';
          document.getElementById('success').style.display = 'block';
        }}>Submit</Button>
      </Form>
    </Tab.Pane>
  },
  { menuItem: 'Corporate Registration', render: () => <Tab.Pane attached={false}>
  <Form style={{'text-align':'left'}}>
    <Form.Field>
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <label>GSTIN</label>
          <input placeholder='Enter your GST number' />
        </Grid.Column>
        <Grid.Column>
        <Button style={{'background-color':'#663399', 'color':'white', 'text-align':'center', 'margin-top':'20px'}} size='small' type='submit'> Generate OTP </Button>
        </Grid.Column>
        <Grid.Column>
          <label>Enter OTP</label>
          <input placeholder='Enter OTP' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Form.Field>
    <Form.Field>
      <label>Email ID</label>
      <input placeholder='Enter your email-id' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type='password' placeholder='Enter Your User Name' />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input type='password' placeholder='Enter the password again' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button style={{'width':'100%', 'background-color':'#663399', 'color':'white'}} size='large' type='submit' onClick={()=>{
      document.getElementById('registration').style.display = 'none';
      document.getElementById('success').style.display = 'block';
    }}>Submit</Button>
  </Form>
  </Tab.Pane> },
]

const Registration = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default Registration