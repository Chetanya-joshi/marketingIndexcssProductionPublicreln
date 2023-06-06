/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './images/influencer.jpeg'

import Card from 'react-bootstrap/Card';


const Marketing = () => {

  return (

    <div>

    <Container className="containers">
      <h1 className="mt-1 text-white text-center">Influencer Marketing</h1>
      {/* <h3 className="mt-3  text-white text-center">What We Offer</h3> */}
      <Card style={{ width: '18rem' }} className="marketing_card mt-5 mb-5" >
      <Card.Img variant="top" src={offer1} style={{width:'54%'}}/>
      <Card.Body>
        <Card.Title>Influencer Marketing
</Card.Title>
        <Card.Text>
        Influencer marketing has become a powerful strategy for businesses to reach their target audience through influential individuals in their respective industries. By partnering with relevant influencers, businesses can leverage their credibility and large following to promote their products or services. Influencer marketing provides authentic and relatable content, increasing brand awareness and driving customer engagement. It helps businesses tap into niche markets and reach a highly targeted audience.

        </Card.Text>
        
      </Card.Body>
    </Card>



      {/* footer starts  */}
      
      {/*  footer ends  */}
    </Container>
    <footer className=" text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><i className="fa fa-envelope"></i> Email: atraskiabhyudaymajhi@gmail.com</p>
              <p><i className="fa fa-phone"></i> Contact No: 9163720198</p>
              <p><i className="fa fa-phone"></i> Contact No: 7596009785</p>
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>



</div>






  )
}

export default Marketing
