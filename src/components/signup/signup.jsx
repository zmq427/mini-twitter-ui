import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Signup() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate()

  async function handleConfirm() {
    var data;
    await axios({
      method: "get",
      url:`http://localhost:8080/Mini-Twitter/registerServlet?username=${username}&password=${password}`
    }).then(function (resp) {
      console.log(resp.data)
      data = resp.data
    }).catch(function (error) {
      console.log(error)
    })

    if (data == null) {
      // 用户名已经存在
      document.getElementById("usernameExist").style.display = 'block'
    } else {
      document.getElementById("usernameExist").style.display = 'none'
      // 用户名可用
      alert('Successfully registered')
      // 跳转至登录界面
      nav('/login')
    }
  }

  return (
    <div>
      signup<br/>
      Set your username and password... <br/>
      <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <p id="usernameExist" style={{display: 'none'}}>This username has been used...</p>
      <Link to="/login"><button>Back</button></Link>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  )
}
