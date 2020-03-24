import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import { useCountUp } from 'react-countup'
import CountUp from 'react-countup';
import Container from 'react-bootstrap/Container'
import { Timeline } from 'react-twitter-widgets'
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


import { connect } from 'react-redux'


class NewsFeed extends Component {

  constructor(props){
    super(props)
    this.state = {
      feed: "",
      link: this.props.link
    }
  }

  setFeed = (newsFeed) => {

    this.setState({
      feed: newsFeed
    })
  }

  parseNews = () => {

    let list = "RETURNED"

    if(this.state.feed !== ""){
    list = <div >
          <ListGroup>
            <ListGroup.Item variant="info">
                <div>{this.state.feed.title}</div>
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[0].link} >
                {this.state.feed.items[0].title}
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[1].link} >
                {this.state.feed.items[1].title}
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[2].link} >
                {this.state.feed.items[2].title}
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[3].link} >
                {this.state.feed.items[3].title}
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[4].link} >
                {this.state.feed.items[4].title}
            </ListGroup.Item>
            <ListGroup.Item action target="_blank" href={this.state.feed.items[5].link} >
                {this.state.feed.items[5].title}
            </ListGroup.Item>
          </ListGroup>
        </div>
    }
    return list
  }

  // getFeed = () => {
  //   let Parser = require('rss-parser');
  //   let parser = new Parser();
  //   (async () => {
  //     let newsFeed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss');
  //     this.setState({
  //       feed: newsFeed
  //     })
  //   })();




  render() {
    return (
      <div>
        {this.parseNews()}
      </div>
    )
  }

  componentDidMount(){
    let Parser = require('rss-parser');
    let parser = new Parser();

    if(this.state.link === "1"){
      this.link = `https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss`
    } else if(this.state.link === "2") {
      this.link = 'https://nypost.com/metro/feed/'
    } else if(this.state.link === "3"){
      this.link = 'https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml'
    } else if(this.state.link === "4"){
      this.link = 'https://eldiariony.com/categoria/nueva-york/feed/'
    } else if(this.state.link === "5"){
      this.link = 'https://www.boston.com/tag/local-news/feed'
    } else if(this.state.link === "6"){
      this.link = 'https://whdh.com/feed/'
    }

    //debugger
    //this.link = 'https://cors-anywhere.herokuapp.com/https://www.enterprisenews.com/news/community?template=rss&mime=xml'

    //debugger
    //let newLink = this.state.link
    //let link = `https://cors-anywhere.herokuapp.com/${this.state.link}`
    (async () => {
      let newsFeed = await parser.parseURL(this.link);
      //let newsFeedDaily = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://nypost.com/metro/feed/');
      //debugger
      this.setFeed(newsFeed)
      //console.log(newsFeed)
    })();

 }


}


export default NewsFeed


//
// let newsFeedNY = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss');
// let newsFeedDaily = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://nypost.com/metro/feed/');
// debugger
