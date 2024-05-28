import React from 'react'
import logo from '../../images/ripplelogo.png'

const Navigation = () => {
  return (
    <div className='h-screen sticky top-0'>
        <div>
            <div className='py-5'>
                <img src={logo} alt='logo' className='nav-logo'></img>

            </div>
        </div>

    </div>
  )
}

export default Navigation