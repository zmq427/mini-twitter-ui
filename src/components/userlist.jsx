import axios from 'axios'
import React, { Component } from 'react'

async function fetchData () {
  var user_list
  await axios.get(`http://localhost:8080/Mini-Twitter/getUsersServlet`).then(function(response){
    if (response.data.code === 1){
      user_list = response.data.data
    } else {
      console.log("Fetching userlist failed")
    }
  }).catch(function(error){
    console.log(error)
  })
  return user_list
}

export default class userlist extends Component {
  constructor(props){
    super(props)
    this.state = {userlist: []}
  }
  

  async componentDidMount(){
    const user_list = await fetchData()
    console.log(user_list)
    this.setState({userlist: user_list})
  }

  
  render() {
    return (
      <div>
        <ul>
          {
            this.state.userlist.map((user) => {
              return (
                <div>
                  <li key={user.userId}>{user.username}</li>
                  <button>follow</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}