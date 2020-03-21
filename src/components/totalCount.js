import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import { useCountUp } from 'react-countup'
import CountUp from 'react-countup';
import Container from 'react-bootstrap/Container'

import Jumbotron from 'react-bootstrap/Jumbotron'


import { connect } from 'react-redux'


class TotalCount extends Component {


  render() {
    return (

        <div>
        <h1 style={{color: "red", fontSize: "14vw"}}> <span style={{color: "green", fontSize: "10vw"}}>cases:</span> <CountUp end={642} /> </h1>

        </div>



    )
  }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(TotalCount)
