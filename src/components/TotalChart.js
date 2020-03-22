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

const data = [
{
  name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
},
{
  name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
},
{
  name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
},
{
  name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
},
{
  name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
},
{
  name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
},
{
  name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
},
];

class TotalChart extends Component {


  render() {
    return (
      <div>
      <h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>Chart</h5>
      <ResponsiveContainer width={'100%'} height={400} >
          <AreaChart data={data}
            margin={{ top: 0, right: 30, left: 0, bottom: 20 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
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

export default connect(mapStateToProps)(TotalChart)
