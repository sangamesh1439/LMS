import Layout from '../components/layout'
import React from 'react'
import { Grid, Image,Form,Segment, Message,Button} from 'semantic-ui-react'


const contactus = () => (
      <Layout>
        <h1>Contact Us</h1>
        <br/>
        <h2>Connect to know more !</h2>
            

  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Message style={{ background: '#f1f1f1' }}
    icon='phone volume'
    header='022-56563412        (TollFree)'
  />

              
      <Message style={{ background: '#bfefff' }}
    icon='mobile alternate'
    header='9867123450     (TollFree)'
  />

  <Message style={{ background: '#98FB98' }} icon='building' header='Ministry of Labour & Employment
Govt. of India,
Shram Shakti Bhawan
Rafi Marg, 
New Delhi-110001, 
India' 
>
  </Message>
  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><h3>Heyy ! Now you can mail us !!</h3></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Image size='small' spaced="right" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-B9AegVrb2nRqzldUNoiBeyUM25mlUejjRDpDtKijpaZMPlRK"/>
       
       </Grid.Column>

<Grid.Column>
      
<Message>
<Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Your Name' />
    </Form.Field>
    <Form.Field>
      <label>Email-Id</label>
      <input placeholder='Your Mail-id' />
    </Form.Field>
    <Form.Field>
    <label>Message</label>
      <textarea placeholder="Your Message"></textarea>
    </Form.Field>
    <Button type='submit'>Send</Button>
  </Form>

</Message>

        </Grid.Column>



    </Grid>
  </Segment>




 </Layout>)


export default contactus