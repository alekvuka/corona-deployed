import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import TotalCount from '../components/totalCount.js'
import TotalChart from '../components/TotalChart.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from './Footer.js'

import { connect } from 'react-redux'


class NewYork extends Component {



  render() {
    return (
      <Container>
          <Row className="justify-content-md-center">
            <Col > <TotalCount /> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <TotalChart /> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <TotalChart /> </Col>
            <Col > <TotalChart /> </Col>
          </Row>
      </Container>

    )
  }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(NewYork)
