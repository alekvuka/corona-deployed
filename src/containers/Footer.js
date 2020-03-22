import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Footer extends Component {

  render() {
    return (
          <Row style={{ backgroundColor: "lightpink"}} className="justify-content-md-center">
            <Col >
              <h5 style={{color: "purple", fontSize: ".80em", textAlign: 'center', paddingTop:"10px"}}>This too chall pass! Stay strong &hearts; Made by <a href='http://www.aleksvuk.com' target="_blank">aleks</a></h5>
            </Col>
          </Row>
    )
  }

}

export default Footer
