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
            name: '03/02', cases: 2,
          },
          {
            name: '03/03', cases: 2,
          },
          {
            name: '03/04', cases: 2,
          },
          {
            name: '03/05', cases: 3,
          },
          {
            name: '03/06', cases: 8,
          },
          {
            name: '03/07', cases: 13,
          },
          {
            name: '03/08', cases: 28,
          },
          {
            name: '03/09', cases: 41,
          },
          {
            name: '03/10', cases: 92,
          },
          {
            name: '03/11', cases: 95,
          },
          {
            name: '03/12', cases: 108,
          },
          {
            name: '03/13', cases: 123,
          },
          {
            name: '03/14', cases: 138,
          },
          {
            name: '03/15', cases: 164,
          },
          {
            name: '03/16', cases: 197,
          },
          {
            name: '03/17', cases: 218,
          },
          {
            name: '03/18', cases: 256,
          },
          {
            name: '03/19', cases: 328,
          },
          {
            name: '03/20', cases: 413,
          },
          {
            name: '03/21', cases: 525,
          },
          {
            name: '03/22', cases: 646,
          },
          {
            name: '03/23', cases: 777,
          },
          {
            name: '03/24', cases: 1159,
          },
          {
            name: '03/25', cases: 1838,
          },
          {
            name: '03/26', cases: 2417,
          },
          {
            name: '03/27', cases: 3240,
          },
          {
            name: '03/28', cases: 4272,
          },
          {
            name: '03/29', cases: 4955,
          },
          {
            name: '03/30', cases: 5752,
          },
          {
            name: '03/30', cases: 6620,
          },
          {
            name: '04/1', cases: 7738,
          },
          {
            name: '04/2', cases: 8966,
          },
          {
            name: '04/3', cases: 10402,
          },
          {
            name: '04/4', cases: 11736,
          },
          {
            name: '04/5', cases: 12500,
          },
          {
            name: '04/6', cases: 13837,
          },
          {
            name: '04/7', cases: 15202,
          },
          {
            name: '04/8', cases: 16790,
          },
          {
            name: '04/9', cases: 18941,
          },
          {
            name: '04/10', cases: 20974,
          },
          {
            name: '04/11', cases: 22860,
          },
          {
            name: '04/12', cases: 25475,
          },
          {
            name: '04/13', cases: 26867,
          },
          {
            name: '04/14', cases: 28163,
          },
          {
            name: '04/15', cases: 29918,
          },
          {
            name: '04/16', cases: 32181,
          },
          {
            name: '04/17', cases: 34402,
          },
          {
            name: '04/18', cases: 36372,
          },
          {
            name: '04/19', cases: 38077,
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
          {
            name: '03/31', deaths: 89,
          },
          {
            name: '04/1', deaths: 122,
          },
          {
            name: '04/2', deaths: 154,
          },
          {
            name: '04/3', deaths: 192,
          },
          {
            name: '04/4', deaths: 216,
          },
          {
            name: '04/5', deaths: 231,
          },
          {
            name: '04/6', deaths: 260,
          },
          {
            name: '04/7', deaths: 356,
          },
          {
            name: '04/8', deaths: 433,
          },
          {
            name: '04/9', deaths: 503,
          },
          {
            name: '04/10', deaths: 599,
          },
          {
            name: '04/11', deaths: 686,
          },
          {
            name: '04/12', deaths: 756,
          },
          {
            name: '04/13', deaths: 844,
          },
          {
            name: '04/14', deaths: 957,
          },
          {
            name: '04/15', deaths: 1108,
          },
          {
            name: '04/16', deaths: 1245,
          },
          {
            name: '04/17', deaths: 1404,
          },
          {
            name: '04/18', deaths: 1560,
          },
          {
            name: '04/19', deaths: 1706,
          },
        ],

        casesByCounty: [
              { name: 'Barnstable', value: 514, fullMark: 150 },
              { name: 'Berkshire', value: 360, fullMark: 150 },
              { name: 'Dukes and Nantucket', value: 11, fullMark: 150 },
              { name: 'Franklin', value: 155, fullMark: 150 },
              { name: 'Hampshire', value: 233, fullMark: 150 },
              { name: 'Hampden', value: 1798, fullMark: 150 },
              { name: 'Bristol', value: 1335, fullMark: 150 },
              { name: 'Unknown', value: 506, fullMark: 150 },
              { name: 'Essex', value: 3594, fullMark: 150 },
              { name: 'Norfolk', value: 2969, fullMark: 150 },
              { name: 'Plymouth ', value: 2207, fullMark: 150 },
              { name: 'Suffolk', value: 5872, fullMark: 150 },
              { name: 'Worcester ', value: 2246, fullMark: 150 },
              { name: 'Middlesex ', value: 6254, fullMark: 150 },
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
            <Col> <h1 style={{color: "red", fontSize: "3em"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
            <Col> <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of April 19th, 4:00pm:</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row  style={{marginTop:'20px'}}>
              <Col>  <DailyChart data={this.state.dailyCases} dataNameX="name" dataNameY="deaths" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>  <CountUp end={954} /> deaths as of April 19th, 4:00pm </h5></div>} /></Col>
          </Row>
          <Row  style={{marginTop:'20px'}}>
              <Col> <RadarTotal data={this.state.casesByCounty} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center', marginBottom: '20px'}}> # of cases by county as of April 14th 4:00pm:</h5></div>}  /></Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
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
//     <Col> <CustomPie data={this.state.casesByCounty} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> # of cases by county as of March 27 4:00pm:</h5></div>}  /></Col>
// </Row>
// <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
//     <Col> <DailyChartPretty data={this.state.casesByCounty} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> # of cases by county as of March 27 4:00pm:</h5></div>}  /></Col>
// </Row>

// <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
//   <Col > <CustomPie /></Col>
// </Row>

// <Row className="justify-content-md-center" style={{marginTop:'20px'}}>
//    <Col> <CustomPie title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> # of cases by county as of March 26 4:00pm:</h5></div>}  /></Col>
//  </Row>



//textAlign: 'center'
//<h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}>Chart</h5>
