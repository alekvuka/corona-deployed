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

import {PieChart, Pie, Sector, Cell, Legend, Tooltip, ResponsiveContainer} from 'recharts';

import { connect } from 'react-redux'

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

class PChart extends Component {


  render() {
    return (
      <div>
      <h5>New Title</h5>
        <ResponsiveContainer width={'100%'} height={400} >
          <PieChart >
            <Pie dataKey="value" isAnimationActive={true} data={data01} cx={200} cy={200} outerRadius={100} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
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

export default connect(mapStateToProps)(PChart)
