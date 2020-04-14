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


class Seattle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayTweets: false,
      link1: "https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss",
    totalCases: [
          {
            name: '3/4', cases: 7,
          },
          {
            name: '3/5', cases: 11,
          },
          {
            name: '3/6', cases: 13,
          },
          {
            name: '3/7', cases: 14,
          },
          {
            name: '3/8', cases: 14,
          },
          {
            name: '3/9', cases: 19,
          },
          {
            name: '3/10', cases: 20,
          },
          {
            name: '3/11', cases: 27,
          },
          {
            name: '3/12', cases: 30,
          },
          {
            name: '3/13', cases: 40,
          },
          {
            name: '3/14', cases: 54,
          },
          {
            name: '3/15', cases: 69,
          },
          {
            name: '3/16', cases: 94,
          },
          {
            name: '3/17', cases: 144,
          },
          {
            name: '3/18', cases: 190,
          },
          {
            name: '3/19', cases: 231,
          },
          {
            name: '3/20', cases: 294,
          },
          {
            name: '3/21', cases: 351,
          },
          {
            name: '3/22', cases: 409,
          },
          {
            name: '3/23', cases: 536,
          },
          {
            name: '3/24', cases: 662,
          },
          {
            name: '3/25', cases: 799,
          },
          {
            name: '3/26', cases: 1216,
          },
          {
            name: '3/27', cases: 1465,
          },
          {
            name: '3/28', cases: 1804,
          },
          {
            name: '3/29', cases: 2136,
          },
          {
            name: '3/30', cases: 2474,
          },
          {
            name: '3/31', cases: 3011,
          },
          {
            name: '4/1', cases: 3518,
          },
          {
            name: '4/2', cases: 4045,
          },
          {
            name: '4/3', cases: 4566,
          },
          {
            name: '4/4', cases: 5277,
          },
        ],
      death: [
            {
              name: '3/4', deaths: 0,
            },
            {
              name: '3/5', deaths: 0,
            },
            {
              name: '3/6', deaths: 0,
            },
            {
              name: '3/7', cases: 0,
            },
            {
              name: '3/8', deaths: 0,
            },
            {
              name: '3/9', deaths: 0,
            },
            {
              name: '3/10', deaths: 0,
            },
            {
              name: '3/11', deaths: 1,
            },
            {
              name: '3/12', deaths: 1,
            },
            {
              name: '3/13', deaths: 1,
            },
            {
              name: '3/14', deaths: 1,
            },
            {
              name: '3/15', deaths: 1,
            },
            {
              name: '3/16', deaths: 1,
            },
            {
              name: '3/17', deaths: 1,
            },
            {
              name: '3/18', deaths: 1,
            },
            {
              name: '3/19', deaths: 2,
            },
            {
              name: '3/20', deaths: 2,
            },
            {
              name: '3/21', deaths: 4,
            },
            {
              name: '3/22', deaths: 5,
            },
            {
              name: '3/23', deaths: 7,
            },
            {
              name: '3/24', deaths: 10,
            },
            {
              name: '3/25', deaths: 13,
            },
            {
              name: '3/26', deaths: 21,
            },
            {
              name: '3/27', deaths: 26,
            },
            {
              name: '3/28', deaths: 32,
            },
            {
              name: '3/29', deaths: 37,
            },
            {
              name: '3/30', deaths: 44,
            },
            {
              name: '3/31', deaths: 54,
            },
            {
              name: '4/1', deaths: 65,
            },
            {
              name: '4/2', deaths: 78,
            },
            {
              name: '4/3', deaths: 89,
            },
            {
              name: '4/4', deaths: 117,
            },
          ],


    }
  }


  getTweets = () => {
    return <div>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed prof={"MayorOfLA"} /> </Col>
      <Col > <TwitterFeed prof={"LAPDHQ"} /> </Col>
      <Col > <TwitterFeed prof={"GavinNewsom"}/> </Col>
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
            <Col> <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of April 4, 4:00pm:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row  style={{marginTop:'20px'}}>
              <Col>  <DailyChart data={this.state.death} dataNameX="name" dataNameY="deaths" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>  <CountUp end={177} /> deaths as of April 2, 4:00pm </h5></div>} /></Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="13"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="14"/> </Col>
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

export default connect(mapStateToProps)(Seattle)
