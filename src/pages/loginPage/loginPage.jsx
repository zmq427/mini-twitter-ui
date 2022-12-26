import React from 'react'
import { Route, Routes } from 'react-router-dom'
import banner from '../../assets/twitter-banner.png'
import Login from '../../components/login/login'
import Signup from '../../components/signup/signup'

export default function () {
  return (
    <div>
      <img src={banner} alt='banner' className='banner'/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}
