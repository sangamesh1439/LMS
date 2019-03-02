import React from 'react'
import Layout from '../components/layout'
import Registration from '../components/registration'
import {Container} from 'semantic-ui-react'
import Success from '../components/success'


const Registration_student_Corportate = () => (
  <Layout>
    <div style={{'background-color': '#C9C9CC', 'padding':'60px 200px 60px 200px'}}>
      <div style={{'background-color': 'white', 'padding':'20px', 'filter': 'drop-shadow(10px 5px 3px black)'}} >
        <Container>
          <center>
            <div id="registration" style={{'display':'block'}}>
              <Registration />
            </div>
            <div id="success" style={{'display':'none'}}>
              <Success />
            </div>
          </center>
        </Container>
      </div>
    </div>
  </Layout>
)

export default Registration_student_Corportate