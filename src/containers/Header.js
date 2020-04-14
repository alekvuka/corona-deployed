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
          <Nav.Link eventKey="link-2" onClick={this.props.displayBayArea}>Bay Area</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={this.props.displayLA}>Los Angeles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={this.props.displaySeattle}>Washington</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-6" onClick={this.props.displayNJ}>New Jersey</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-8" onClick={this.props.displayConn}>Conneticut</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-1" onClick={this.props.displayBoston}>Massachusetts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-7" onClick={this.props.displayLUI}>Louisiana</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  displayNYC: () => dispatch({ type: "DISPLAY_NYC"}),
  displayBayArea: () => dispatch({ type: "DISPLAY_BAYAREA"}),
  displayBoston: () => dispatch({ type: "DISPLAY_BOSTON"}),
  displayLA: () => dispatch({ type: "DISPLAY_LA"}),
  displaySeattle: () => dispatch({ type: "DISPLAY_SEATTLE"}),
  displayConn: () => dispatch({ type: "DISPLAY_CONN"}),
  displayLUI: () => dispatch({ type: "DISPLAY_LUI"}),
  displayNJ: () => dispatch({ type: "DISPLAY_NJ"}),
})


export default connect(null, mapDispatchToProps)(Header)
