import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import banner from '../../assets/twitter-banner.png'
import Login from '../login/login'
import Signup from '../signup/signup'

export default function LoginPage() {
  return (
    <div>
      <img src={banner} alt='banner' className='banner' style={{display: 'none'}}/>
      <Routes>
        <Route path='/loginPage/login' element={<Login/>}/>
        <Route path='/loginPage/signup' element={<Signup/>}/>
        <Route path='/loginPage' element={<Navigate to='/loginPage/login'/>}/>
      </Routes>
    </div>
  )
}
