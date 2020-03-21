import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';

import Boston from './Boston.js'
import NewYork from './NewYork.js'
import LosAngeles from './LosAngeles.js'
import SanFrancisco from './SanFrancisco.js'
import Seattle from './Seattle.js'
import { connect } from 'react-redux'


class Body extends Component {

  whatToDisplay = () => {
    // if(this.state.display === "NYC"){
    //   return <NewYorl/>
    // }elsif{
    // }
    debugger
    switch(this.props.display) {
      case "NYC":
        return <NewYork />
      case "Boston":
        return <Boston />
      case "LA":
        return <LosAngeles />
      case "Seattle":
        return <Seattle />
      case "SF":
        return <SanFrancisco />
      default:
        return ""
    }

  }

  render() {
    return (
      <div>
        {this.whatToDisplay()}
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(Body)
