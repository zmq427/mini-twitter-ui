import axios from 'axios'
import React, { Component } from 'react'

export default class Stream extends Component {
  constructor(props) {
    super(props)
    this.state = {tweetlist: []}
  }

  async componentDidMount() {
    const newTweetList = await this.fetchData()
    console.log(newTweetList)
    this.setState({tweetlist: newTweetList})
    console.log(this.state.tweetlist)
  }

  async fetchData() {
    let userId = JSON.parse(localStorage.getItem('userInfo')).userId
    let tweet_list
    await axios.get(`http://localhost:8080/Mini-Twitter/getTweetServlet?userId=${userId}`).then(function(response){
      if (response.data.code === 1){
        tweet_list = response.data.data
      } else {
        console.log("Fetching tweetlist failed")
      }
    }).catch(function(error){
      console.log(error)
    })
    return tweet_list
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.tweetlist.map((tweet) => {
              return (
                <li key={tweet.tweet_text}>
                  <p>{tweet.username}</p>
                  <p>{tweet.tweet_text}</p>
                  <p>{tweet.timestamp}</p>
                </li>
              )
              
            })
          }
        </ul>
      </div>
    )
  }
}

