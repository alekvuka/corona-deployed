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

//import { Area, ReferenceLine, AreaChart, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

import { connect } from 'react-redux'


class DailyChart extends Component {

  render() {
    //
    // if(this.props.nm === "borough"){
    //   let n = "borough"
    // }else{
    //   let n = "name"
    // }

    //debugger


    return (
      <div>
      {this.props.title}
      <ResponsiveContainer width={'100%'} height={400} >
        <BarChart data={this.props.data} margin={{ top: 0, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.props.dataNameX} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={this.props.dataNameY} fill="#8884d8" />
        </BarChart>
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

export default connect(mapStateToProps)(DailyChart)
