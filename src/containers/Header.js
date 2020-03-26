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

      <Nav  fill variant="tabs" defaultActiveKey="link-5">
        <Nav.Item>
          <Nav.Link eventKey="link-5" onClick={this.props.displayNYC}>New York City</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-1" onClick={this.props.displayBoston}>Massachusetts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={this.props.displaySF}>Bay Area</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={this.props.displayLA}>Los Angeles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={this.props.displaySeattle}>Seattle</Nav.Link>
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
