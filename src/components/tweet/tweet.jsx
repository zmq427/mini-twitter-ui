import axios from 'axios'
import React from 'react'

export default function Tweet() {

  async function handleClick() {
    var tweet_text = document.getElementById("tweet_body").value
    var current_time = dateFormater(new Date())
    var user = JSON.parse(localStorage.getItem('userInfo'))
    await axios.post('http://localhost:8080/Mini-Twitter/tweetServlet',
      {
        tweet_text: tweet_text,
        user_id: user.userId,
        username: user.username,
        timestamp: current_time
      }
    ).then(function(response) {
      console.log(response)
      if (response.data) {
        console.log(response.data)
      }
    }).catch(function(error) {
      console.log(error)
    })
  }

  return (
    <div id='tweet_area'>
      <textarea name="tweet_body" id="tweet_body" cols="30" rows="10"/>
      <button onClick={handleClick}>Tweets</button>
    </div>
  )
}

function dateFormater(date) {
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}