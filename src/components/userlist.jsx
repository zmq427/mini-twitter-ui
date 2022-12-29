import axios from 'axios'
import React, { Component } from 'react'

export default class Userlist extends Component {
  constructor(props){
    super(props)
    this.state = {userlist: []}
    this.render = this.render.bind(this)
    this.follow = this.follow.bind(this)
    this.unfollow = this.unfollow.bind(this)
  }
  
  async componentDidMount(){
    const user_list = await this.fetchData()
    console.log(user_list)
    this.setState({userlist: user_list})
  }

  async fetchData() {
    let followerId = JSON.parse(localStorage.getItem('userInfo')).userId
    let user_list
    await axios.get(`http://localhost:8080/Mini-Twitter/getUsersServlet?followerId=${followerId}`).then(function(response){
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
  
  async follow(userId) {
    await axios.post(`http://localhost:8080/Mini-Twitter/followServlet`, 
    {
      followerId: JSON.parse(localStorage.getItem("userInfo")).userId,
      followeeId: userId
    }).then(function(response){
      if (response.data.code === 1){
        console.log("following user succeed")
        alert("following user succeed")
        const btn = document.getElementById(userId)
    
      } else {
        console.log("following user failed")
      }
    }).catch(function(error){
      console.log(error)
    })
    this.setState({userlist: await this.fetchData()})
  }
  
  async unfollow(userId) {
    await axios.post(`http://localhost:8080/Mini-Twitter/unfollowServlet`, 
    {
      followerId: JSON.parse(localStorage.getItem("userInfo")).userId,
      followeeId: userId
    }).then(function(response){
      if (response.data.code === 1){
        console.log("unfollowing user succeed")
        alert("unfollowing user succeed")
        const btn = document.getElementById(userId)
        
      } else {
        console.log("unfollowing user failed")
      }
    }).catch(function(error){
      console.log(error)
    })
    this.setState({userlist: await this.fetchData()})
  }
  
  render() {
    return (
      <div>
        <ul>
          {
            this.state.userlist.map((user) => {
              return (
                <li key={user.userId}>
                  {user.username}
                  <button id={user.userId} onClick={user.followed===1? 
                    async () => { this.unfollow(user.userId)}: 
                    async () => { this.follow(user.userId) }}>
                    {
                      user.followed === 1? "unfollow": "follow"
                    }
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}