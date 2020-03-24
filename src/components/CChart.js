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

//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import { connect } from 'react-redux'



class CChart extends Component {

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    return (
      <div>
      {this.props.title}
      <ResponsiveContainer width={'100%'} height={400}  >
        <ComposedChart data={this.props.data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
         <CartesianGrid stroke="#f5f5f5" />
         <Tooltip />
         <XAxis dataKey="name" label={{ value: 'age', position: 'insideBottom', offset: 0 }} />
         <YAxis label={{ value: 'percent', angle: -90, position: 'insideLeft', size: 20 }} />
         <Area type="monotone" dataKey="deaths" fill="lightpink" stroke="red" />
         <Bar dataKey="cases" barSize={45} fill="#413ea0" />
       </ComposedChart>
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

export default connect(mapStateToProps)(CChart)
