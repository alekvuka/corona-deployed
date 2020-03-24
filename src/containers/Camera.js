
import React, { Component } from 'react'




  class Camera extends Component {

    constructor(props){
      super(props)
      this.state = {
        url: props.url + Math.random()
      }

    }

    updateImage = () => {
          this.setState({
            url: this.props.url + Math.random()
          })
      }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.updateImage(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }


    render() {
      return (
        <div>
          <img width="300px" src={this.state.url} alt="alternate"  />
        </div>
      )
    }

  }


export default Camera
