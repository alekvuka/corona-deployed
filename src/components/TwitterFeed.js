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


class TwitterFeed extends Component {

  constructor(props) {
    super(props)
    this.state = { tweetTimeline: "" }
  }

  getTweet = () => {
    return <a class="twitter-timeline" data-height="300" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
  }

  render() {

    return (
        <div>
            {this.state.tweetTimeline}
        </div>
    )
  }

  componentDidMount(){


    const tweet = <div><TwitterTimelineEmbed
      sourceType="profile"
      screenName="saurabhnemade"
      noFooter='true'
      noBorder='true'
      options={{height: 250}}
    /></div>
    //debugger

    this.setState({
      tweetTimeline: tweet
    }
    )

 }


}

const mapStateToProps = state => {
  return {
    display: state.display
  }
}

export default connect(mapStateToProps)(TwitterFeed)
