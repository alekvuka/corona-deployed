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



class TotalAreaChart extends Component {


  render() {
    return (
      <div>
      {this.props.title}
      <ResponsiveContainer width={'100%'} height={400} >
        <AreaChart width={500} height={400} data={this.props.data} margin={{top: 0, right: 30, left: 0, bottom: 20}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area type="monotone" dataKey="queens" stackId="1" stroke="red" fill="red" />
          <Area type="monotone" dataKey="brooklyn" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="bronx" stackId="1" stroke="black" fill="black" />
          <Area type="monotone" dataKey="manhattan" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="staten_island" stackId="1" stroke="violet" fill="violet" />
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

export default connect(mapStateToProps)(TotalAreaChart)

 //stroke="#ffc658" fill="#ffc658" />

// <Area type="monotone" dataKey="queens" stackId="1" stroke="#8884d8" fill="#8884d8" />
// <Area type="monotone" dataKey="brooklyn" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
// <Area type="monotone" dataKey="bronx" stackId="1" stroke="#ffc658" fill="#ffc658" />
// <Area type="monotone" dataKey="manhattan" stackId="1" stroke="#ffc658" fill="#ffc458" />
// <Area type="monotone" dataKey="staten_island" stackId="1" stroke="#ffc658" fill="#ffe658" />
