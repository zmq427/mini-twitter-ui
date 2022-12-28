import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/sideBar/sideBar";
import Tweet from "../../components/tweet/tweet";
import Userlist from "../../components/userlist";

export default function Home() {

  const [logged, setLogged] = useState(false)
  let navigate = useNavigate()
  
  useEffect(() => {
    let user = localStorage.getItem('userInfo')
    if (user == null) {
      alert("You haven't logged in")
      navigate('/loginPage/login')
    }
    setLogged(user != null)
  }, [navigate])
  
  async function handleLogout() {
    localStorage.removeItem('userInfo')
    await axios({
      method: 'post',
      url: `http://localhost:8080/Mini-Twitter/logoutServlet`
    }).then(function (resp) {
      console.log(resp)
    }).catch(function (error) {
      console.log(error)
    })
    navigate('/loginPage/login')
  }

  return (
    <div>
      <h1>This is homepage....</h1>
      { 
        logged?
        <div>
          <p>User has logged in, current user is {localStorage.getItem('userInfo')}</p>
          <button onClick={handleLogout}>log out</button>
        </div> : 
        <p>User hasn't logged in</p>
      }
      <SideBar/>
      <Tweet/>
      <Userlist/>
    </div>
  )
}
