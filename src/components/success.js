import React from 'react'
import { Icon, Message } from 'semantic-ui-react'
import { Link } from 'gatsby'

const Success = () => (
    <div>
        <Icon name='check circle' size='huge' color='green' />
        <Message positive>
            <Message.Header><h3>You have successfully registered.</h3> </Message.Header>
            <p>
                <Link to="/register">
                    Click Here to proceed to the dashboard.
                  </Link>
            </p>
        </Message>
    </div>
);

export default Success