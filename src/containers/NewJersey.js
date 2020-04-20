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


class NewJersey extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayTweets: false,
      link1: "https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss",
    totalCases: [
          {
            name: '3/4', cases: 1,
          },
          {
            name: '3/5', cases: 2,
          },
          {
            name: '3/6', cases: 4,
          },
          {
            name: '3/7', cases: 4,
          },
          {
            name: '3/8', cases: 6,
          },
          {
            name: '3/9', cases: 11,
          },
          {
            name: '3/10', cases: 15,
          },
          {
            name: '3/11', cases: 23,
          },
          {
            name: '3/12', cases: 29,
          },
          {
            name: '3/13', cases: 50,
          },
          {
            name: '3/14', cases: 69,
          },
          {
            name: '3/15', cases: 98,
          },
          {
            name: '3/16', cases: 178,
          },
          {
            name: '3/17', cases: 267,
          },
          {
            name: '3/18', cases: 427,
          },
          {
            name: '3/19', cases: 742,
          },
          {
            name: '3/20', cases: 890,
          },
          {
            name: '3/21', cases: 1327,
          },
          {
            name: '3/22', cases: 1914,
          },
          {
            name: '3/23', cases: 2844,
          },
          {
            name: '3/24', cases: 3675,
          },
          {
            name: '3/25', cases: 4402,
          },
          {
            name: '3/26', cases: 6876,
          },
          {
            name: '3/27', cases: 8825,
          },
          {
            name: '3/28', cases: 11124,
          },
          {
            name: '3/29', cases: 13386,
          },
          {
            name: '3/30', cases: 16636,
          },
          {
            name: '3/31', cases: 18696,
          },
          {
            name: '4/1', cases: 22255,
          },
          {
            name: '4/2', cases: 25590,
          },
          {
            name: '4/3', cases: 29895,
          },
          {
            name: '4/4', cases: 34124,
          },
          {
            name: '4/5', cases: 37505,
          },
          {
            name: '4/6', cases: 41090,
          },
          {
            name: '4/7', cases: 44416,
          },
          {
            name: '4/8', cases: 47437,
          },
          {
            name: '4/9', cases: 51027,
          },
          {
            name: '4/10', cases: 54588,
          },
          {
            name: '4/11', cases: 58151,
          },
          {
            name: '4/12', cases: 61850,
          },
          {
            name: '4/13', cases: 64584,
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
              name: '3/10', deaths: 1,
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
              name: '3/15', deaths: 2,
            },
            {
              name: '3/16', deaths: 2,
            },
            {
              name: '3/17', deaths: 3,
            },
            {
              name: '3/18', deaths: 5,
            },
            {
              name: '3/19', deaths: 9,
            },
            {
              name: '3/20', deaths: 11,
            },
            {
              name: '3/21', deaths: 16,
            },
            {
              name: '3/22', deaths: 20,
            },
            {
              name: '3/23', deaths: 27,
            },
            {
              name: '3/24', deaths: 44,
            },
            {
              name: '3/25', deaths: 62,
            },
            {
              name: '3/26', deaths: 84,
            },
            {
              name: '3/27', deaths: 108,
            },
            {
              name: '3/28', deaths: 140,
            },
            {
              name: '3/29', deaths: 161,
            },
            {
              name: '3/30', deaths: 198,
            },
            {
              name: '3/31', deaths: 267,
            },
            {
              name: '4/1', deaths: 355,
            },
            {
              name: '4/2', deaths: 537,
            },
            {
              name: '4/3', deaths: 646,
            },
            {
              name: '4/4', deaths: 917,
            },
            {
              name: '4/5', deaths: 1003,
            },
            {
              name: '4/7', deaths: 1232,
            },
            {
              name: '4/8', deaths: 1504,
            },
            {
              name: '4/9', deaths: 1700,
            },
            {
              name: '4/10', deaths: 1932,
            },
            {
              name: '4/11', deaths: 2183,
            },
            {
              name: '4/12', deaths: 2350,
            },
            {
              name: '4/13', deaths: 2443,
            },
          ],


    }
  }


  getTweets = () => {
    return <div>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed prof={"GovMurphy"} /> </Col>
      <Col > <TwitterFeed prof={"NJGov"} /> </Col>
      <Col > <TwitterFeed prof={"NJDeptofHealth"}/> </Col>
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
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="15"/> </Col>
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

export default connect(mapStateToProps)(NewJersey)
