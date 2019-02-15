import React, { Component } from 'react';
import { TweetBody } from './components/tweet.js'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="main-body">
        <TweetBody 
          name="Karthik Kalyan"
          handle="@karthikkalyan90"
          tweet="hello world hello worldhello worldhello worldhello"/>
      </div>
    );
  }
}

export default Feed
