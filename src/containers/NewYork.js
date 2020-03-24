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
import Camera from './Camera.js'

import { connect } from 'react-redux'


class NewYork extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayTweets: false,
      link1: "https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss",
      totalCases: [
          {
            name: '03/1', cases: 1,
          },
          {
            name: '03/02', cases: 1,
          },
          {
            name: '03/03', cases: 2,
          },
          {
            name: '03/04', cases: 2,
          },
          {
            name: '03/05', cases: 4,
          },
          {
            name: '03/06', cases: 7,
          },
          {
            name: '03/07', cases: 12,
          },
          {
            name: '03/08', cases: 14,
          },
          {
            name: '03/09', cases: 25,
          },
          {
            name: '03/10', cases: 32,
          },
          {
            name: '03/11', cases: 53,
          },
          {
            name: '03/12', cases: 88,
          },
          {
            name: '03/13', cases: 137,
          },
          {
            name: '03/14', cases: 185,
          },
          {
            name: '03/15', cases: 269,
          },
          {
            name: '03/16', cases: 464,
          },
          {
            name: '03/17', cases: 923,
          },
          {
            name: '03/18', cases: 2009,
          },
          {
            name: '03/19', cases: 3954,
          },
          {
            name: '03/20', cases: 5683,
          },
          {
            name: '03/21', cases: 8115,
          },
          {
            name: '03/22', cases: 10764,
          },
          {
            name: '03/23', cases: 13119,
          },
        ],
    dailyCases: [
          {
            name: '03/2', cases: 0,
          },
          {
            name: '03/03', cases: 1,
          },
          {
            name: '03/04', cases: 1,
          },
          {
            name: '03/05', cases: 0,
          },
          {
            name: '03/06', cases: 2,
          },
          {
            name: '03/07', cases: 3,
          },
          {
            name: '03/08', cases: 5,
          },
          {
            name: '03/09', cases: 2,
          },
          {
            name: '03/10', cases: 11,
          },
          {
            name: '03/11', cases: 7,
          },
          {
            name: '03/12', cases: 21,
          },
          {
            name: '03/13', cases: 35,
          },
          {
            name: '03/14', cases: 49,
          },
          {
            name: '03/15', cases: 48,
          },
          {
            name: '03/16', cases: 84,
          },
          {
            name: '03/17', cases: 195,
          },
          {
            name: '03/18', cases: 459,
          },
          {
            name: '03/19', cases: 1068,
          },
          {
            name: '03/20', cases: 1945,
          },
          {
            name: '03/21', cases: 1730,
          },
          {
            name: '03/22', cases: 2649,
          },
          {
            name: '03/23', cases: 2359,
          },
        ],

        deathByBorough: [
              {
                name: 'queens', cases: 40,
              },
              {
                name: 'brooklyn', cases: 27,
              },
              {
                name: 'bronx', cases: 28,
              },
              {
                name: 'manhattan', cases: 19,
              },
              {
                name: 'staten island', cases: 11,
              },
            ],
          casesVsDeaths: [
            {
              name: '0-17', cases: 3, deaths: 0,
            },
            {
              name: '18-44', cases: 46, deaths: 25,
            },
            {
              name: '45-64', cases: 33, deaths: 18,
            },
            {
              name: '75 and over', cases: 8, deaths: 54,
            },
          ]
    }
  }


  getTweets = () => {
    return <div>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed prof={"NYCMayor"} /> </Col>
      <Col > <TwitterFeed prof={"NYGovCuomo"} /> </Col>
      <Col > <TwitterFeed prof={"nycHealthy"}/> </Col>
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
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col > <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <DailyChart data={this.state.dailyCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> daly new cases </h5></div>} /></Col>
            <Col > <DailyChart data={this.state.deathByBorough} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> total # of deaths by borough </h5></div>} /></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <CChart data={this.state.casesVsDeaths} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> % cases vs % deaths by age </h5></div>} /> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>tweets:</h1> </Col>
          </Row>
          {this.state.displayTweets ? this.getTweets() : ""}
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px'}} > <NewsFeed link="1"/> </Col>
            <Col style={{marginBottom:'40px'}} > <NewsFeed link="2"/> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px'}} > <NewsFeed link="4"/> </Col>
            <Col style={{marginBottom:'40px'}} > <NewsFeed link="3"/> </Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'0px'}}>
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>live views:</h1> </Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col md= 'auto' style={{marginBottom:'40px'}} > <Camera url="http://207.251.86.238/cctv782.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px'}} > <Camera url="http://207.251.86.238/cctv212.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px'}} > <Camera url="http://207.251.86.238/cctv439.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px'}} > <Camera url="http://207.251.86.238/cctv1004.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px'}} > <Camera url="http://207.251.86.238/cctv26.jpg?rand="/> </Col>
          </Row>



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

export default connect(mapStateToProps)(NewYork)


//textAlign: 'center'
//<h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>Chart</h5>
