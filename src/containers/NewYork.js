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

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from './Footer.js'
import NewsFeed from '../components/NewsFeed.js'
import TwitterFeed from '../components/TwitterFeed.js'

import { connect } from 'react-redux'


class NewYork extends Component {

  constructor(props) {
    super(props)
    this.state = { displayTweets: false }
  }


  getTweets = () => {
    return <div>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed /> </Col>
      <Col > <TwitterFeed /> </Col>
      <Col > <TwitterFeed /> </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col > <TwitterFeed /> </Col>
      <Col > <TwitterFeed /> </Col>
      <Col > <TwitterFeed /> </Col>
    </Row>
    </div>
  }



  render() {

    return (
      <Container>
          <Row className="justify-content-md-center" style={{marginTop:'20px'}} >
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>stats:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <TotalChart /> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col > <TotalChart /> </Col>
            <Col > <TotalAreaChart /> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>tweets:</h1> </Col>
          </Row>
          {this.state.displayTweets ? this.getTweets() : ""}
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <h1 style={{color: "red", fontSize: "4vw"}}>news:</h1> </Col>
          </Row>
          <Row className="justify-content-md-center"  style={{marginTop:'20px'}}>
            <Col > <NewsFeed /> </Col>
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
