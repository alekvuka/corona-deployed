import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


class Header extends Component {

  render() {
    return (

      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">New York City</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-1" onClick={""}>Boston</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">San Francisco</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Los Angeles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Seattle</Nav.Link>
        </Nav.Item>
      </Nav>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  displayNYC: () => dispatch({ type: "DISPLAY_NYC"}),
  displaySF: () => dispatch({ type: "DISPLAY_SF"}),
  displayBoston: () => dispatch({ type: "DISPLAY_BOSTON"}),
  displayLA: () => dispatch({ type: "DISPLAY_LA"}),
  displaySeattle: () => dispatch({ type: "DISPLAY_SEATTLE"}),
})


export default connect(null, mapDispatchToProps)(Header)
