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

import { Area, ReferenceLine, AreaChart, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { connect } from 'react-redux'

class TotalChart extends Component {


  render() {
    return (
      <div>
      {this.props.title}
      <ResponsiveContainer width={'100%'} height={400} >
          <AreaChart data={this.props.data}
            margin={{ top: 0, right: 0, left: 10, bottom: 20 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
      </ResponsiveContainer>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}
//fill="#8884d8"

export default connect(mapStateToProps)(TotalChart)
