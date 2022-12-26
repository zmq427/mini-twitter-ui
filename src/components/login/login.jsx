import axios from 'axios';
import { useState } from 'react';
import { Link, Router, Route } from 'react-router-dom';

async function request(input1, input2) {
  var data;
  await axios({
    method: 'get',
    url: `http://localhost:8080/Mini-Twitter/loginServlet?username=${input1}&password=${input2}`
  }).then(function (resp) {
    alert(resp.data)
    console.log(resp.data)
    data = resp.data
  }).catch(function (error) {
    console.log(error)
  })

  if (data != null) {
    document.getElementById("isMatch").style.display = 'none'
    // 跳转到Home页面
    

  } else {
    document.getElementById("isMatch").style.display = 'block'   
  }
}

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit() {
    request(username, password)
  }

  return (
    <div>
      Login<br/>
      input your username and password <br/>
      <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <p id="isMatch" style={{display: 'none'}}>Username and password don't match...</p>
      <button onClick={handleSubmit}>sign in</button> 
      <Link to="/signup">
        Don't have an account?
      </Link>
    </div>
  )
}

export default Login;

