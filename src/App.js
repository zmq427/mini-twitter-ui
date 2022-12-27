import {  Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='loginPage' element={<LoginPage/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
        <Route path='/:username' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
