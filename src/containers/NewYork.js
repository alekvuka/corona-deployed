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
      deathByBoroughArea: [
        {
          name: '03/23',
          bronx: 28,
          brooklyn : 27,
          manhattan: 19,
          queens: 40,
          staten_island: 11
        },
        {
          name: '03/24',
          bronx: 41,
          brooklyn : 42,
          manhattan: 30,
          queens: 61,
          staten_island: 18
        },
        {
          name: '03/25',
          bronx: 60,
          brooklyn : 64,
          manhattan: 43,
          queens: 92,
          staten_island: 21
        },
        {
          name: '03/26',
          bronx: 80,
          brooklyn : 81,
          manhattan: 55,
          queens: 123,
          staten_island: 26
        },
        {
          name: '03/27',
          bronx: 101,
          brooklyn: 102,
          manhattan: 65,
          queens: 149,
          staten_island: 33
        },
        {
          name: '03/28',
          bronx: 152,
          brooklyn: 167,
          manhattan: 93,
          queens: 216,
          staten_island: 43
        },
        {
          name: '03/29',
          bronx: 188,
          brooklyn: 185,
          manhattan: 103,
          queens: 253,
          staten_island: 46
        },
        {
          name: '03/30',
          bronx: 215,
          brooklyn: 216,
          manhattan: 119,
          queens: 305,
          staten_island: 58
        },
        {
          name: '03/31',
          bronx: 262,
          brooklyn: 261,
          manhattan: 129,
          queens: 376,
          staten_island: 67
        },
      ],

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
          {
            name: '03/24', cases: 15597,
          },
          {
            name: '03/25', cases: 20011,
          },
          {
            name: '03/26', cases: 23112,
          },
          {
            name: '03/27', cases: 26697,
          },
          {
            name: '03/28', cases: 30765,
          },
          {
            name: '03/29', cases: 33474,
          },
          {
            name: '03/29', cases: 38087,
          },
          {
            name: '03/31', cases: 41771,
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
          {
            name: '03/24', cases: 2482,
          },
          {
            name: '03/25', cases: 4414,
          },
          {
            name: '03/26', cases: 3101,
          },
          {
            name: '03/27', cases: 3585,
          },
          {
            name: '03/28', cases: 4068,
          },
          {
            name: '03/29', cases: 2709,
          },
          {
            name: '03/30', cases: 4613,
          },
          {
            name: '03/31', cases: 3684,
          },
        ],

        deathByBorough: [
              {
                borough: 'queens', deaths: 123,
              },
              {
                borough: 'brooklyn', deaths: 80,
              },
              {
                borough: 'bronx', deaths: 81,
              },
              {
                borough: 'manhattan', deaths: 55,
              },
              {
                borough: 'staten island', deaths: 26,
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
    <Row className="justify-content-md-center" style={{marginBottom:'40px'}}>
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
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col style={{minWidth:"300px"}} > <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of March 31, 4:30pm :</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col style={{minWidth:"300px"}}  > <DailyChart data={this.state.dailyCases} dataNameX="name" dataNameY="cases" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> daly new cases as of March 31, 4:30pm </h5></div>} /></Col>
            <Col style={{minWidth:"300px"}}  > <TotalAreaChart data={this.state.deathByBoroughArea}  title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <CountUp end={1096} /> deaths as of March 31, 4:30pm </h5></div>} /></Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'0px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>views:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="http://207.251.86.238/cctv782.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="http://207.251.86.238/cctv212.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="http://207.251.86.238/cctv439.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="http://207.251.86.238/cctv1004.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="http://207.251.86.238/cctv26.jpg?rand="/> </Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{md:'auto', marginBottom:'20px', minWidth:"300px"}} >
              <NewsFeed link="1"/>
            </Col>
            <Col style={{md:'auto', marginBottom:'20px', minWidth:"300px"}} >
              <NewsFeed link="2"/>
            </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col style={{md:'auto', marginBottom:'40px', minWidth:"300px"}} > <NewsFeed  link="4"/> </Col>
            <Col style={{md:'auto', marginBottom:'40px', minWidth:"300px"}} > <NewsFeed  link="3"/> </Col>
          </Row>


          <Row className="justify-content-md-center" >
            <Col > <h1 style={{color: "red", fontSize: "3em", marginBottom:"20px"}}>tweets:</h1> </Col>
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

export default connect(mapStateToProps)(NewYork)


//dataNameX="borough" dataNameY="deaths"

//<Col style={{minWidth:"300px"}}  > <DailyChart data={this.state.deathByBorough} dataNameX="borough" dataNameY="deaths" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <CountUp end={365} /> deaths as of March 26, 5:00pm </h5></div>} /></Col>


//textAlign: 'center'
//<h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>Chart</h5>

// <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
//   <Col > <CChart data={this.state.casesVsDeaths} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> % cases vs % deaths by age as of March, 23</h5></div>} /> </Col>
// </Row>
