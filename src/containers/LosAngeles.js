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


class LosAngeles extends Component {

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
          {
            name: '4/5', cases: 5940,
          },
          {
            name: '4/6', cases: 6360,
          },
          {
            name: '4/7', cases: 6910,
          },
          {
            name: '4/8', cases: 7530,
          },
          {
            name: '4/9', cases: 7955,
          },
          {
            name: '4/10', cases: 8430,
          },
          {
            name: '4/11', cases: 9192,
          },
          {
            name: '4/12', cases: 9420,
          },
          {
            name: '4/14', cases: 10047,
          },
          {
            name: '4/15', cases: 10596,
          },
          {
            name: '4/16', cases: 10854,
          },
          {
            name: '4/17', cases: 11319,
          },
          {
            name: '4/18', cases: 12021,
          },
          {
            name: '4/19', cases: 12341,
          },
          {
            name: '4/20', cases: 13816,
          },
          {
            name: '4/21', cases: 15140,
          },
          {
            name: '4/22', cases: 16435,
          },
          {
            name: '4/23', cases: 17508,
          },
          {
            name: '4/24', cases: 18517,
          },
          {
            name: '4/25', cases: 19107,
          },
          {
            name: '4/26', cases: 19528,
          },
          {
            name: '4/27', cases: 20417,
          },
          {
            name: '4/28', cases: 20976,
          },
          {
            name: '4/29', cases: 22485,
          },
          {
            name: '4/30', cases: 23182,
          },
          {
            name: '5/1', cases: 24215,
          },
          {
            name: '5/2', cases: 24894,
          },
          {
            name: '5/3', cases: 25662,
          },
          {
            name: '5/4', cases: 26217,
          },
          {
            name: '5/5', cases: 27815,
          },
          {
            name: '5/6', cases: 28644,
          },
          {
            name: '5/7', cases: 29427,
          },
          {
            name: '5/8', cases: 30296,
          },
          {
            name: '5/9', cases: 31197,
          },
          {
            name: '5/10', cases: 31667,
          },
          {
            name: '5/11', cases: 32258,
          },
          {
            name: '5/12', cases: 33180,
          },
          {
            name: '5/13', cases: 34428,
          },
          {
            name: '5/14', cases: 35329,
          },
          {
            name: '5/15', cases: 36259,
          },
          {
            name: '5/16', cases: 37303,
          },
          {
            name: '5/17', cases: 38451,
          },
          {
            name: '5/18', cases: 39573,
          },
          {
            name: '5/19', cases: 39573,
          },
          {
            name: '5/20', cases: 40857,
          },
          {
            name: '5/21', cases: 42037,
          },
          {
            name: '5/22', cases: 43052,
          },
          {
            name: '5/23', cases: 44055,
          },
          {
            name: '5/24', cases: 44988,
          },
          {
            name: '5/25', cases: 46018,
          },
          {
            name: '5/26', cases: 47822,
          },
          {
            name: '5/27', cases: 48700,
          },
          {
            name: '5/28', cases: 49774,
          },
          {
            name: '5/29', cases: 51562,
          },
          {
            name: '5/30', cases: 53651,
          },
          {
            name: '5/31', cases: 54996,
          },
          {
            name: '6/1', cases: 55968,
          },
          {
            name: '6/2', cases: 57118,
          },
          {
            name: '6/3', cases: 58234,
          },
          {
            name: '6/4', cases: 59650,
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
            {
              name: '4/5', deaths: 131,
            },
            {
              name: '4/6', deaths: 147,
            },
            {
              name: '4/7', deaths: 169,
            },
            {
              name: '4/8', deaths: 198,
            },
            {
              name: '4/9', deaths: 223,
            },
            {
              name: '4/10', deaths: 241,
            },
            {
              name: '4/11', deaths: 265,
            },
            {
              name: '4/12', deaths: 296,
            },
            {
              name: '4/13', deaths: 320,
            },
            {
              name: '4/14', deaths: 360,
            },
            {
              name: '4/15', deaths: 402,
            },
            {
              name: '4/16', deaths: 455,
            },
            {
              name: '4/17', deaths: 495,
            },
            {
              name: '4/18', deaths: 576,
            },
            {
              name: '4/19', deaths: 600,
            },
            {
              name: '4/20', deaths: 617,
            },
            {
              name: '4/21', deaths: 663,
            },
            {
              name: '4/22', deaths: 729,
            },
            {
              name: '4/23', deaths: 797,
            },
            {
              name: '4/24', deaths: 848,
            },
            {
              name: '4/25', deaths: 895,
            },
            {
              name: '4/26', deaths: 913,
            },
            {
              name: '4/27', deaths: 942,
            },
            {
              name: '4/28', deaths: 1000,
            },
            {
              name: '4/29', deaths: 1026,
            },
            {
              name: '4/30', deaths: 1111,
            },

            {
              name: '5/1', deaths: 1172,
            },
            {
              name: '5/2', deaths: 1209,
            },
            {
              name: '5/3', deaths: 1229,
            },
            {
              name: '5/4', deaths: 1259,
            },
            {
              name: '5/5', deaths: 1313,
            },
            {
              name: '5/6', deaths: 1367,
            },
            {
              name: '5/7', deaths: 1418,
            },
            {
              name: '5/8', deaths: 1468,
            },
            {
              name: '5/9', deaths: 1512,
            },
            {
              name: '5/10', deaths: 1530,
            },
            {
              name: '5/11', deaths: 1569,
            },
            {
              name: '5/12', deaths: 1613,
            },
            {
              name: '5/13', deaths: 1659,
            },
            {
              name: '5/14', deaths: 1709,
            },
            {
              name: '5/15', deaths: 1755,
            },
            {
              name: '5/16', deaths: 1793,
            },
            {
              name: '5/17', deaths: 1821,
            },
            {
              name: '5/18', deaths: 1839,
            },
            {
              name: '5/19', deaths: 1913,
            },
            {
              name: '5/20', deaths: 1970,
            },
            {
              name: '5/21', deaths: 2016,
            },
            {
              name: '5/22', deaths: 2049,
            },
            {
              name: '5/23', deaths: 2090,
            },
            {
              name: '5/24', deaths: 2104,
            },
            {
              name: '5/25', deaths: 2116,
            },
            {
              name: '5/26', deaths: 2143,
            },
            {
              name: '5/27', deaths: 2195,
            },
            {
              name: '5/28', deaths: 2241,
            },
            {
              name: '5/29', deaths: 2290,
            },
            {
              name: '5/30', deaths: 2338,
            },
            {
              name: '5/31', deaths: 2362,
            },
            {
              name: '6/1', deaths: 2384,
            },
            {
              name: '6/2', deaths: 2443,
            },
            {
              name: '6/3', deaths: 2489,
            },
            {
              name: '6/4', deaths: 2531,
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
            <Col> <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of June 4th, 4:00pm:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row  style={{marginTop:'20px'}}>
              <Col>  <DailyChart data={this.state.death} dataNameX="name" dataNameY="deaths" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>  <CountUp end={2531} /> deaths as of April 19, 4:00pm </h5></div>} /></Col>
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

export default connect(mapStateToProps)(LosAngeles)
