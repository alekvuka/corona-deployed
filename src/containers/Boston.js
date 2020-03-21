import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';

import TotalCount from '../components/totalCount.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { connect } from 'react-redux'


class Boston extends Component {



  render() {
    return (
      <Container>
          <Row className="justify-content-md-center">
            <Col md="auto"> <TotalCount /></Col>
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

export default connect(mapStateToProps)(Boston)
