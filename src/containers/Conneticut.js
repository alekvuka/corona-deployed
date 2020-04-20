import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import TotalCount from '../components/totalCount.js'
import TotalChart from '../components/TotalChart.js'
import TotalAreaChart from '../components/TotalAreaChart.js'
import CountUp from 'react-countup';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from './Footer.js'
import NewsFeed from '../components/NewsFeed.js'
import TwitterFeed from '../components/TwitterFeed.js'
import DailyChart from '../components/DailyChart.js'
import PChart from '../components/PChart.js'
import CChart from '../components/CChart.js'
import CustomPie from '../components/CustomPie.js'
import { useMediaQuery } from 'react-responsive'
import DailyChartPretty from '../components/DailyChartPretty.js'
import RadarTotal from '../components/RadarTotal.js'

import { connect } from 'react-redux'


class Conneticut extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayTweets: false,
      link1: "https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss",
    totalCases: [
          {
            name: '3/24', cases: 618,
          },
          {
            name: '3/25', cases: 883,
          },
          {
            name: '3/26', cases: 1012,
          },
          {
            name: '3/27', cases: 1291,
          },
          {
            name: '3/28', cases: 1524,
          },
          {
            name: '3/29', cases: 1993,
          },
          {
            name: '3/30', cases: 2517,
          },
          {
            name: '3/31', cases: 3128,
          },
          {
            name: '4/1', cases: 3557,
          },
          {
            name: '4/2', cases: 3824,
          },
          {
            name: '4/3', cases: 4914,
          },
          {
            name: '4/4', cases: 5276,
          },
          {
            name: '4/5', cases: 5675,
          },
          {
            name: '4/6', cases: 6906,
          },
          {
            name: '4/7', cases: 7781,
          },
          {
            name: '4/8', cases: 8781,
          },
          {
            name: '4/9', cases: 9784,
          },
          {
            name: '4/10', cases: 10538,
          },
          {
            name: '4/11', cases: 11510,
          },
          {
            name: '4/12', cases: 12035,
          },
          {
            name: '4/13', cases: 13381,
          },
          {
            name: '4/14', cases: 13989,
          },
          {
            name: '4/15', cases: 14755,
          },
          {
            name: '4/16', cases: 15884,
          },
          {
            name: '4/17', cases: 16809,
          },
          {
            name: '4/18', cases: 17550,
          },
          {
            name: '4/19', cases: 17962,
          },
        ],
      death: [
            {
              name: '3/17', deaths: 27,
            },
            {
              name: '3/18', deaths: 68,
            },
            {
              name: '3/19', deaths: 63,
            },
            {
              name: '3/20', deaths: 35,
            },
            {
              name: '3/21', deaths: 29,
            },
            {
              name: '3/22', deaths: 104,
            },
            {
              name: '3/23', deaths: 88,
            },
            {
              name: '3/24', deaths: 203,
            },
            {
              name: '3/25', deaths: 257,
            },
            {
              name: '3/26', deaths: 137,
            },
            {
              name: '3/27', deaths: 279,
            },
            {
              name: '3/28', deaths: 233,
            },
            {
              name: '3/29', deaths: 469,
            },
            {
              name: '3/30', deaths: 578,
            },
            {
              name: '3/31', deaths: 557,
            },
            {
              name: '4/1', deaths: 429,
            },
            {
              name: '4/2', deaths: 267,
            },
            {
              name: '4/3', deaths: 1090,
            },
            {
              name: '4/4', deaths: 362,
            },
            {
              name: '4/5', deaths: 399,
            },
            {
              name: '4/6', deaths: 1231,
            },
            {
              name: '4/7', deaths: 875,
            },
            {
              name: '4/8', deaths: 1000,
            },
            {
              name: '4/9', deaths: 1003,
            },
            {
              name: '4/10', deaths: 754,
            },
            {
              name: '4/11', deaths: 972,
            },
            {
              name: '4/12', deaths: 525,
            },
            {
              name: '4/13', deaths: 1346,
            },
            {
              name: '4/14', deaths: 1346,
            },
            {
              name: '4/15', deaths: 1346,
            },
            {
              name: '4/16', deaths: 1346,
            },
            {
              name: '4/17', deaths: 1346,
            },
            {
              name: '4/18', deaths: 1346,
            },
            {
              name: '4/19', deaths: 1346,
            },
          ],


    }
  }


  getTweets = () => {
    return <div>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed prof={"GovNedLamont"} /> </Col>
      <Col > <TwitterFeed prof={"CTGOVERNMENT"} /> </Col>
      <Col > <TwitterFeed prof={"stamfordmayor"}/> </Col>
    </Row>
    </div>
  }

  sendLink = () => {
    return this.state.link1
  }

  render() {

    return (
      <Container>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col> <h1 style={{color: "red", fontSize: "3em"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col> <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of April 19th, 4:00pm:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="16"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="17"/> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>tweets:</h1> </Col>
          </Row>
          {this.state.displayTweets ? this.getTweets() : ""}
      </Container>
    )
  }

  componentDidMount(){
    this.tweetDisplayTimer = setTimeout(this.setState({displayTweets: true}), 3000);
 }

 componentWillUnmount() {
  clearTimeout(this.tweetDisplayTimer)
 }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(Conneticut)


// <Row  style={{marginTop:'20px'}}>
//     <Col>  <DailyChart data={this.state.death} dataNameX="name" dataNameY="deaths" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>  <CountUp end={177} /> deaths as of April 2, 4:00pm </h5></div>} /></Col>
// </Row>
