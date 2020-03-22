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

import Jumbotron from 'react-bootstrap/Jumbotron'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


import { connect } from 'react-redux'


class NewsFeed extends Component {



  render() {

    return (

      <div></div>
    )
  }
  componentDidMount(){
    //
    // fetch('https://cors-anywhere.herokuapp.com/https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss',
    // {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //   }).then(response => {
    //
    //   return response.text()
    // }).then(data => {
    //   debugger
    //   console.log(data)
    // })
    let Parser = require('rss-parser');
    let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.ny1.com/services/contentfeed.nyc%7call-boroughs%7cnews.landing.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();


 }


}



const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(NewsFeed)
