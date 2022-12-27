import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import banner from '../../assets/twitter-banner.png'
import Login from '../login/login'
import Signup from '../signup/signup'

export default function LoginPage() {
  return (
    <div>
      <img src={banner} alt='banner' className='banner' style={{display: 'none'}}/>
      <Outlet/>
    </div>
  )
}
