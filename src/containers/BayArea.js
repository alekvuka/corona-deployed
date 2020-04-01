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


class BayArea extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayTweets: false,
      link1: "https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss",
      deathByBoroughArea: [
        {
          name: '03/2',
          napa: 0,
          solano: 1,
          sonoma: 0,
          marin: 0,
          contra_costa: 0,
          alameda: 0,
          san_mateo: 0,
          san_francisco: 0,
          santa_clara: 9,
        },
        {
          name: '03/3',
          napa: 0,
          solano: 1,
          sonoma: 0,
          marin: 0,
          contra_costa: 1,
          alameda: 1,
          san_mateo: 0,
          san_francisco: 0,
          santa_clara: 11,
        },
        {
          name: '03/4',
          napa: 2,
          solano: 8,
          sonoma: 2,
          marin: 1,
          contra_costa: 4,
          alameda: 2,
          san_mateo: 2,
          san_francisco: 0,
          santa_clara: 14,
        },
        {
          name: '03/5',
          napa: 2,
          solano: 8,
          sonoma: 3,
          marin: 1,
          contra_costa: 4,
          alameda: 2,
          san_mateo: 2,
          san_francisco: 2,
          santa_clara: 20,
        },
        {
          name: '03/6',
          napa: 0,
          solano: 8,
          sonoma: 3,
          marin: 1,
          contra_costa: 7,
          alameda: 2,
          san_mateo: 2,
          san_francisco: 2,
          santa_clara: 24,
        },
        {
          name: '03/6',
          napa: 0,
          solano: 8,
          sonoma: 3,
          marin: 1,
          contra_costa: 7,
          alameda: 2,
          san_mateo: 2,
          san_francisco: 2,
          santa_clara: 24,
        },
        {
          name: '03/7',
          napa: 0,
          solano: 8,
          sonoma: 3,
          marin: 1,
          contra_costa: 7,
          alameda: 3,
          san_mateo: 2,
          san_francisco: 8,
          santa_clara: 32,
        },
        {
          name: '03/8',
          napa: 0,
          solano: 8,
          sonoma: 3,
          marin: 1,
          contra_costa: 7,
          alameda: 3,
          san_mateo: 2,
          san_francisco: 8,
          santa_clara: 37,
        },
        {
          name: '03/9',
          napa: 0,
          solano: 3,
          sonoma: 3,
          marin: 1,
          contra_costa: 9,
          alameda: 2,
          san_mateo: 9,
          san_francisco: 13,
          santa_clara: 43,
        },
        {
          name: '03/10',
          napa: 0,
          solano: 6,
          sonoma: 3,
          marin: 1,
          contra_costa: 10,
          alameda: 3,
          san_mateo: 9,
          san_francisco: 14,
          santa_clara: 45,
        },
        {
          name: '03/11',
          napa: 0,
          solano: 6,
          sonoma: 3,
          marin: 3,
          contra_costa: 10,
          alameda: 3,
          san_mateo: 15,
          san_francisco: 14,
          santa_clara: 48,
        },
        {
          name: '03/12',
          napa: 0,
          solano: 6,
          sonoma: 3,
          marin: 3,
          contra_costa: 10,
          alameda: 3,
          san_mateo: 15,
          san_francisco: 18,
          santa_clara: 48,
        },
        {
          name: '03/13',
          napa: 0,
          solano: 6,
          sonoma: 3,
          marin: 3,
          contra_costa: 25,
          alameda: 11,
          san_mateo: 20,
          san_francisco: 23,
          santa_clara: 79,
        },
        {
          name: '03/14',
          napa: 0,
          solano: 6,
          sonoma: 3,
          marin: 3,
          contra_costa: 25,
          alameda: 11,
          san_mateo: 20,
          san_francisco: 28,
          santa_clara: 91,
        },
        {
          name: '03/15',
          napa: 0,
          solano: 6,
          sonoma: 4,
          marin: 5,
          contra_costa: 25,
          alameda: 11,
          san_mateo: 20,
          san_francisco: 37,
          santa_clara: 114,
        },
        {
          name: '03/16',
          napa: 0,
          solano: 9,
          sonoma: 5,
          marin: 9,
          contra_costa: 29,
          alameda: 21,
          san_mateo: 42,
          san_francisco: 40,
          santa_clara: 138,
        },
        {
          name: '03/17',
          napa: 0,
          solano: 9,
          sonoma: 6,
          marin: 15,
          contra_costa: 39,
          alameda: 27,
          san_mateo: 64,
          san_francisco: 43,
          santa_clara: 155,
        },
        {
          name: '03/18',
          napa: 0,
          solano: 9,
          sonoma: 8,
          marin: 15,
          contra_costa: 41,
          alameda: 31,
          san_mateo: 80,
          san_francisco: 51,
          santa_clara: 175,
        },
        {
          name: '03/19',
          napa: 0,
          solano: 10,
          sonoma: 8,
          marin: 25,
          contra_costa: 42,
          alameda: 35,
          san_mateo: 89,
          san_francisco: 70,
          santa_clara: 189,
        },
        {
          name: '03/20',
          napa: 0,
          solano: 13,
          sonoma: 11,
          marin: 38,
          contra_costa: 46,
          alameda: 45,
          san_mateo: 100,
          san_francisco: 76,
          santa_clara: 196,
        },
        {
          name: '03/21',
          napa: 0,
          solano: 14,
          sonoma: 23,
          marin: 38,
          contra_costa: 51,
          alameda: 71,
          san_mateo: 110,
          san_francisco: 84,
          santa_clara: 263,
        },
        {
          name: '03/22',
          napa: 2,
          solano: 14,
          sonoma: 27,
          marin: 38,
          contra_costa: 61,
          alameda: 106,
          san_mateo: 117,
          san_francisco: 108,
          santa_clara: 302,
        },
        {
          name: '03/23',
          napa: 2,
          solano: 21,
          sonoma: 29,
          marin: 47,
          contra_costa: 71,
          alameda: 122,
          san_mateo: 142,
          san_francisco: 131,
          santa_clara: 321,
        },
        {
          name: '03/24',
          napa: 3,
          solano: 21,
          sonoma: 34,
          marin: 53,
          contra_costa: 86,
          alameda: 135,
          san_mateo: 161,
          san_francisco: 152,
          santa_clara: 375,
        },
        {
          name: '03/25',
          napa: 5,
          solano: 24,
          sonoma: 35,
          marin: 60,
          contra_costa: 108,
          alameda: 135,
          san_mateo: 165,
          san_francisco: 178,
          santa_clara: 459,
        },
        {
          name: '03/26',
          napa: 6,
          solano: 31,
          sonoma: 39,
          marin: 60,
          contra_costa: 131,
          alameda: 178,
          san_mateo: 195,
          san_francisco: 223,
          santa_clara: 542,
        },
        {
          name: '03/27',
          napa: 8,
          solano: 34,
          sonoma: 43,
          marin: 65,
          contra_costa: 147,
          alameda: 220,
          san_mateo: 239,
          san_francisco: 279,
          santa_clara: 574,
        },
        {
          name: '03/28',
          napa: 9,
          solano: 34,
          sonoma: 54,
          marin: 68,
          contra_costa: 151,
          alameda: 256,
          san_mateo: 274,
          san_francisco: 308,
          santa_clara: 591,
        },
        {
          name: '03/29',
          napa: 10,
          solano: 34,
          sonoma: 54,
          marin: 74,
          contra_costa: 175,
          alameda: 270,
          san_mateo: 277,
          san_francisco: 340,
          santa_clara: 646,
        },
        {
          name: '03/30',
          napa: 14,
          solano: 43,
          sonoma: 58,
          marin: 93,
          contra_costa: 187,
          alameda: 283,
          san_mateo: 309,
          san_francisco: 374,
          santa_clara: 848,
        },
        {
          name: '03/31',
          napa: 15,
          solano: 43,
          sonoma: 73,
          marin: 99,
          contra_costa: 212,
          alameda: 313,
          san_mateo: 309,
          san_francisco: 397,
          santa_clara: 890,
        },
      ],
    dailyCases: [
          {
            name: '03/20', deaths: 1,
          },
          {
            name: '03/21', deaths: 1,
          },
          {
            name: '03/22', deaths: 5,
          },
          {
            name: '03/23', deaths: 9,
          },
          {
            name: '03/24', deaths: 11,
          },
          {
            name: '03/25', deaths: 15,
          },
          {
            name: '03/26', deaths: 25,
          },
          {
            name: '03/27', deaths: 35,
          },
          {
            name: '03/28', deaths: 44,
          },
          {
            name: '03/29', deaths: 48,
          },
          {
            name: '03/30', deaths: 57,
          },
        ],

        casesByCounty: [
              { name: 'Barnstable', value: 173, fullMark: 150 },
              { name: 'Berkshire', value: 162, fullMark: 150 },
              { name: 'Dukes and Nantucket', value: 8, fullMark: 150 },
              { name: 'Franklin', value: 49, fullMark: 150 },
              { name: 'Hampshire', value: 46, fullMark: 150 },
              { name: 'Hampden', value: 255, fullMark: 150 },
              { name: 'Bristol', value: 263, fullMark: 150 },
              { name: 'Unknown', value: 489, fullMark: 150 },
              { name: 'Essex', value: 653, fullMark: 150 },
              { name: 'Norfolk', value: 628, fullMark: 150 },
              { name: 'Plymouth ', value: 380, fullMark: 150 },
              { name: 'Suffolk', value: 1115, fullMark: 150 },
              { name: 'Worcester ', value: 390, fullMark: 150 },
              { name: 'Middlesex ', value: 1141, fullMark: 150 },
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
      <Col > <TwitterFeed prof={"LondonBreed"} /> </Col>
      <Col > <TwitterFeed prof={"sliccardo"} /> </Col>
      <Col > <TwitterFeed prof={"maringov"}/> </Col>
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
            <Col style={{minWidth:"300px"}}  > <TotalAreaChart data={this.state.deathByBoroughArea}  title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> total cases as of March 31, 5:00pm: <CountUp end={2357} />  </h5></div>} /></Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="9"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="10"/> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="11"/> </Col>
            <Col style={{marginBottom:'40px', minWidth:"300px"}} > <NewsFeed link="12"/> </Col>
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

export default connect(mapStateToProps)(BayArea)
