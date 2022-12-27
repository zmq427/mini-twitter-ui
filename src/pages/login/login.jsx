import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  async function request(input1, input2) {
    var result;
    await axios({
      method: 'get',
      url: `http://localhost:8080/Mini-Twitter/loginServlet?username=${input1}&password=${input2}`
    }).then(function (resp) {
      console.log(JSON.stringify(resp.data))
      result = resp.data
    }).catch(function (error) {
      console.log(error)
    })
  
    if (result.code === 1) {
      // 查询到数据,登录成功
      document.getElementById("isMatch").style.display = 'none'
      // 存储到本地
      localStorage.setItem('userInfo', result.data.username)
      // 跳转到Home页面
      navigate('/' + result.data.username)
  
    } else {
      // 未查询到数据，显示提示信息
      document.getElementById("isMatch").style.display = 'block'   
    }
  }

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
      <Link to="../signup">
        Don't have an account?
      </Link>
    </div>
  )
}

export default Login;

