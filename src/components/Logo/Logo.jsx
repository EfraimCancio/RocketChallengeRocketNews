import React from 'react'

import LogoImg from '../../assets/images/logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={LogoImg} alt="Logomarca" />
    </div>
  )
}

export default Logo;