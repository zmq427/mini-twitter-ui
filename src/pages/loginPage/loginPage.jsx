import React from 'react'
import { Outlet } from 'react-router-dom'
import banner from '../../assets/twitter-banner.png'

export default function LoginPage() {
  return (
    <div>
      <img src={banner} alt='banner' className='banner' style={{display: 'none'}}/>
      <Outlet/>
    </div>
  )
}
