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
        {
          name: '04/1',
          bronx: 360,
          brooklyn: 328,
          manhattan: 165,
          queens: 447,
          staten_island: 73
        },
        {
          name: '04/2',
          bronx: 421,
          brooklyn: 385,
          manhattan: 178,
          queens: 499,
          staten_island: 78
        },
        {
          name: '04/3',
          bronx: 480,
          brooklyn: 485,
          manhattan: 215,
          queens: 590,
          staten_island: 96
        },
        {
          name: '04/4',
          bronx: 576,
          brooklyn: 610,
          manhattan: 246,
          queens: 688,
          staten_island: 118
        },
        {
          name: '04/5',
          bronx: 627,
          brooklyn: 688,
          manhattan: 277,
          queens: 771,
          staten_island: 128
        },
        {
          name: '04/6',
          bronx: 679,
          brooklyn: 738,
          manhattan: 302,
          queens: 876,
          staten_island: 142
        },
        {
          name: '04/7',
          bronx: 902,
          brooklyn: 946,
          manhattan: 387,
          queens: 1129,
          staten_island: 179
        },
        {
          name: '04/8',
          bronx: 1001,
          brooklyn: 1185,
          manhattan: 500,
          queens: 1344,
          staten_island: 229
        },
        {
          name: '04/9',
          bronx: 1135,
          brooklyn: 1341,
          manhattan: 554,
          queens: 1493,
          staten_island: 254
        },
        {
          name: '04/10',
          bronx: 1241,
          brooklyn: 1510,
          manhattan: 629,
          queens: 1759,
          staten_island: 289
        },
        {
          name: '04/11',
          bronx: 1308,
          brooklyn: 1618,
          manhattan: 662,
          queens: 1848,
          staten_island: 305
        },
        {
          name: '04/12',
          bronx: 1400,
          brooklyn: 1746,
          manhattan: 710,
          queens: 1994,
          staten_island: 330
        },
        {
          name: '04/13',
          bronx: 1512,
          brooklyn: 1869,
          manhattan: 756,
          queens: 2105,
          staten_island: 345
        },
        {
          name: '04/14',
          bronx: 1584,
          brooklyn: 1954,
          manhattan: 771,
          queens: 2179,
          staten_island: 349
        },
        {
          name: '04/15',
          bronx: 1749,
          brooklyn: 2189,
          manhattan: 927,
          queens: 2314,
          staten_island: 369
        },
        {
          name: '04/16',
          bronx: 1802,
          brooklyn: 2293,
          manhattan: 1004,
          queens: 2402,
          staten_island: 385
        },
        {
          name: '04/17',
          bronx: 1917,
          brooklyn: 2490,
          manhattan: 1088,
          queens: 2543,
          staten_island: 406
        },
        {
          name: '04/18',
          bronx: 1975,
          brooklyn: 2606,
          manhattan: 1148,
          queens: 2646,
          staten_island: 432
        },
        {
          name: '04/19',
          bronx: 2036,
          brooklyn: 2705,
          manhattan: 1185,
          queens: 2722,
          staten_island: 448
        },
        {
          name: '04/20',
          bronx: 2144,
          brooklyn: 2807,
          manhattan: 1259,
          queens: 2877,
          staten_island: 470
        },
        {
          name: '04/21',
          bronx: 2207,
          brooklyn: 2929,
          manhattan: 1316,
          queens: 3002,
          staten_island: 485
        },
        {
          name: '04/22',
          bronx: 2271,
          brooklyn: 3040,
          manhattan: 1359,
          queens: 3114,
          staten_island: 500
        },
        {
          name: '04/23',
          bronx: 2342,
          brooklyn: 3190,
          manhattan: 1390,
          queens: 3304,
          staten_island: 515
        },
        {
          name: '04/24',
          bronx: 2394,
          brooklyn: 3255,
          manhattan: 1405,
          queens: 3374,
          staten_island: 526
        },
        {
          name: '04/25',
          bronx: 2480,
          brooklyn: 3420,
          manhattan: 1487,
          queens: 3511,
          staten_island: 556
        },
        {
          name: '04/26',
          bronx: 2529,
          brooklyn: 3494,
          manhattan: 1532,
          queens: 3581,
          staten_island: 566
        },
        {
          name: '04/27',
          bronx: 2568,
          brooklyn: 3516,
          manhattan: 1550,
          queens: 3608,
          staten_island: 572
        },
        {
          name: '04/28',
          bronx: 2660,
          brooklyn: 3678,
          manhattan: 1600,
          queens: 3755,
          staten_island: 588
        },
        {
          name: '04/29',
          bronx: 2723,
          brooklyn: 3768,
          manhattan: 1645,
          queens: 3832,
          staten_island: 596
        },
        {
          name: '04/30',
          bronx: 2845,
          brooklyn: 3902,
          manhattan: 1699,
          queens: 3940,
          staten_island: 606
        },
        {
          name: '05/1',
          bronx: 2868,
          brooklyn: 3952,
          manhattan: 1722,
          queens: 3993,
          staten_island: 613
        },
        {
          name: '05/2',
          bronx: 2886,
          brooklyn: 4014,
          manhattan: 1752,
          queens: 4035,
          staten_island: 624
        },
        {
          name: '05/3',
          bronx: 2963,
          brooklyn: 4080,
          manhattan: 1774,
          queens: 4102,
          staten_island: 636
        },
        {
          name: '05/4',
          bronx: 2997,
          brooklyn: 4127,
          manhattan: 1797,
          queens: 4149,
          staten_island: 646
        },
        {
          name: '05/5',
          bronx: 3046,
          brooklyn: 4194,
          manhattan: 1822,
          queens: 4213,
          staten_island: 655
        },
        {
          name: '05/6',
          bronx: 3082,
          brooklyn: 4260,
          manhattan: 1874,
          queens: 4269,
          staten_island: 669
        },
        {
          name: '05/7',
          bronx: 3122,
          brooklyn: 4337,
          manhattan: 1909,
          queens: 4332,
          staten_island: 681
        },
        {
          name: '05/8',
          bronx: 3137,
          brooklyn: 4373,
          manhattan: 1913,
          queens: 4363,
          staten_island: 688
        },
        {
          name: '05/9',
          bronx: 3177,
          brooklyn: 4460,
          manhattan: 1946,
          queens: 4455,
          staten_island: 707
        },
        {
          name: '05/10',
          bronx: 3209,
          brooklyn: 4524,
          manhattan: 1973,
          queens: 4497,
          staten_island: 717
        },
        {
          name: '05/11',
          bronx: 3247,
          brooklyn: 4596,
          manhattan: 2000,
          queens: 4529,
          staten_island: 721
        },
        {
          name: '05/12',
          bronx: 3268,
          brooklyn: 4636,
          manhattan: 2022,
          queens: 4571,
          staten_island: 727
        },
        {
          name: '05/13',
          bronx: 3284,
          brooklyn: 4676,
          manhattan: 2048,
          queens: 4595,
          staten_island: 737
        },
        {
          name: '05/14',
          bronx: 3293,
          brooklyn: 4705,
          manhattan: 2057,
          queens: 4610,
          staten_island: 748
        },
        {
          name: '05/15',
          bronx: 3344,
          brooklyn: 4818,
          manhattan: 2126,
          queens: 4707,
          staten_island: 756
        },
        {
          name: '05/16',
          bronx: 3369,
          brooklyn: 4847,
          manhattan: 2147,
          queens: 4750,
          staten_island: 764
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
          {
            name: '04/1', cases: 45707,
          },
          {
            name: '04/2', cases: 49707,
          },
          {
            name: '04/3', cases: 56289,
          },
          {
            name: '04/4', cases: 60850,
          },
          {
            name: '04/5', cases: 64955,
          },
          {
            name: '04/6', cases: 68776,
          },
          {
            name: '04/7', cases: 74601,
          },
          {
            name: '04/8', cases: 80204,
          },
          {
            name: '04/9', cases: 87725,
          },
          {
            name: '04/10', cases: 94409,
          },
          {
            name: '04/11', cases: 98715,
          },
          {
            name: '04/12', cases: 104410,
          },
          {
            name: '04/13', cases: 107263,
          },
          {
            name: '04/14', cases: 111424,
          },
          {
            name: '04/15', cases: 117565,
          },
          {
            name: '04/16', cases: 122148,
          },
          {
            name: '04/17', cases: 126368,
          },
          {
            name: '04/18', cases: 129788,
          },
          {
            name: '04/19', cases: 132467,
          },
          {
            name: '04/20', cases: 134874,
          },
          {
            name: '04/21', cases: 138435,
          },
          {
            name: '04/22', cases: 141754,
          },
          {
            name: '04/23', cases: 146139,
          },
          {
            name: '04/24', cases: 150576,
          },
          {
            name: '04/25', cases: 153204,
          },
          {
            name: '04/26', cases: 156100,
          },
          {
            name: '04/27', cases: 157713,
          },
          {
            name: '04/28', cases: 159865,
          },
          {
            name: '04/29', cases: 162212,
          },
          {
            name: '04/30', cases: 164505,
          },
          {
            name: '05/1', cases: 166883,
          },
          {
            name: '05/2', cases: 168845,
          },
          {
            name: '05/3', cases: 170534,
          },
          {
            name: '05/4', cases: 171723,
          },
          {
            name: '05/5', cases: 173288,
          },
          {
            name: '05/6', cases: 174709,
          },
          {
            name: '05/7', cases: 176086,
          },
          {
            name: '05/8', cases: 177481,
          },
          {
            name: '05/9', cases: 178766,
          },
          {
            name: '05/10', cases: 183662,
          },
          {
            name: '05/11', cases: 184319,
          },
          {
            name: '05/12', cases: 185206,
          },
          {
            name: '05/13', cases: 186293,
          },
          {
            name: '05/14', cases: 187848,
          },
          {
            name: '05/15', cases: 189031,
          },
          {
            name: '05/16', cases: 190408,
          },
        ],
    dailyCases: [
          {
            name: '03/2', cases: 1,
          },
          {
            name: '03/03', cases: 4,
          },
          {
            name: '03/04', cases: 10,
          },
          {
            name: '03/05', cases: 2,
          },
          {
            name: '03/06', cases: 8,
          },
          {
            name: '03/07', cases: 14,
          },
          {
            name: '03/08', cases: 20,
          },
          {
            name: '03/09', cases: 54,
          },
          {
            name: '03/10', cases: 75,
          },
          {
            name: '03/11', cases: 157,
          },
          {
            name: '03/12', cases: 358,
          },
          {
            name: '03/13', cases: 621,
          },
          {
            name: '03/14', cases: 643,
          },
          {
            name: '03/15', cases: 1028,
          },
          {
            name: '03/16', cases: 2106,
          },
          {
            name: '03/17', cases: 2391,
          },
          {
            name: '03/18', cases: 2895,
          },
          {
            name: '03/19', cases: 3579,
          },
          {
            name: '03/20', cases: 3819,
          },
          {
            name: '03/21', cases: 2477,
          },
          {
            name: '03/22', cases: 2414,
          },
          {
            name: '03/23', cases: 3288,
          },
          {
            name: '03/24', cases: 4134,
          },
          {
            name: '03/25', cases: 4495,
          },
          {
            name: '03/26', cases: 4638,
          },
          {
            name: '03/27', cases: 4691,
          },
          {
            name: '03/28', cases: 3160,
          },
          {
            name: '03/29', cases: 3206,
          },
          {
            name: '03/30', cases: 5650,
          },
          {
            name: '03/31', cases: 4937,
          },
          {
            name: '04/1', cases: 4723,
          },
          {
            name: '04/2', cases: 5460,
          },
          {
            name: '04/3', cases: 4999,
          },
          {
            name: '04/4', cases: 3615,
          },
          {
            name: '04/5', cases: 3433,
          },
          {
            name: '04/6', cases: 5957,
          },
          {
            name: '04/7', cases: 5424,
          },
          {
            name: '04/8', cases: 4639,
          },
          {
            name: '04/9', cases: 3405,
          },
          {
            name: '04/10', cases: 2710,
          },
          {
            name: '04/11', cases: 1392,
          },
          {
            name: '04/12', cases: 1392,
          },
          {
            name: '04/13', cases: 1392,
          },
          {
            name: '04/14', cases: 1392,
          },
          {
            name: '04/15', cases: 1392,
          },
          {
            name: '04/16', cases: 1392,
          },
          {
            name: '04/17', cases: 1292,
          },
          {
            name: '04/18', cases: 1092,
          },
        ],
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
            <Col style={{minWidth:"300px"}} > <TotalChart data={this.state.totalCases} title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <span style={{color: "purple", fontSize: "1em"}}>total cases as of May 17th, 6:00pm :</span> <CountUp end={this.state.totalCases.slice(-1)[0].cases} /></h5></div>}/> </Col>
          </Row>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}}>

            <Col style={{minWidth:"300px"}}  > <TotalAreaChart data={this.state.deathByBoroughArea}  title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> <CountUp end={15877} /> deaths as of May 16th, 6:00pm </h5></div>} /></Col>
          </Row>

          <Row className="justify-content-md-center"  style={{marginTop:'0px'}}>
            <Col > <h1 style={{color: "red", fontSize: "3em"}}>views:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="https://jpg.nyctmc.org/cctv782.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="https://jpg.nyctmc.org/cctv212.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="https://jpg.nyctmc.org/cctv439.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="https://jpg.nyctmc.org/cctv1004.jpg?rand="/> </Col>
            <Col md='auto' style={{marginBottom:'40px', minWidth:"300px"}} > <Camera url="https://jpg.nyctmc.org/cctv26.jpg?rand="/> </Col>
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

//<Col style={{minWidth:"300px"}}  > <DailyChart data={this.state.dailyCases} dataNameX="name" dataNameY="cases" title={<div><h5 style={{color: "purple", fontSize: "1em", textAlign: 'center'}}> daly new cases as of May 17th, 6:00pm </h5></div>} /></Col>
