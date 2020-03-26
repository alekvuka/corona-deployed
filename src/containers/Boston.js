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

import { connect } from 'react-redux'


class Boston extends Component {

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
            name: '03/03', cases: 1,
          },
          {
            name: '03/04', cases: 1,
          },
          {
            name: '03/05', cases: 1,
          },
          {
            name: '03/06', cases: 4,
          },
          {
            name: '03/07', cases: 4,
          },
          {
            name: '03/08', cases: 9,
          },
          {
            name: '03/09', cases: 10,
          },
          {
            name: '03/10', cases: 20,
          },
          {
            name: '03/11', cases: 20,
          },
          {
            name: '03/12', cases: 22,
          },
          {
            name: '03/13', cases: 26,
          },
          {
            name: '03/14', cases: 27,
          },
          {
            name: '03/15', cases: 31,
          },
          {
            name: '03/16', cases: 36,
          },
          {
            name: '03/17', cases: 42,
          },
          {
            name: '03/18', cases: 51,
          },
          {
            name: '03/19', cases: 72,
          },
          {
            name: '03/20', cases: 86,
          },
          {
            name: '03/21', cases: 108,
          },
          {
            name: '03/22', cases: 126,
          },
          {
            name: '03/23', cases: 154,
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
      <Col > <TwitterFeed prof={"marty_walsh"} /> </Col>
      <Col > <TwitterFeed prof={"MassGovernor"} /> </Col>
      <Col > <TwitterFeed prof={"MassDPH"}/> </Col>
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
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col > <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases in suffolk county:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'40px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="5"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="6"/> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="7"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="8"/> </Col>
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

export default connect(mapStateToProps)(Boston)


// <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
//   <Col > <CustomPie /></Col>
// </Row>



//textAlign: 'center'
//<h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>Chart</h5>
