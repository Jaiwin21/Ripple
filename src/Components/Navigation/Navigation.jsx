import React from 'react'
import logo from '../../images/ripplelogo.png'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material'

const Navigation = () => {
    const navigate=useNavigate();
  return (
    <div className='h-screen sticky top-0'>
        <div>
            <div className='py-5'>
                <img height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a" src={logo} alt='logo' className='nav-logo'></img>

            </div>
            <div className='space-y-6'>

                {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 
                item-center' onClick={()=>item.title==="Profile"?navigate(`/profile/${5}`)
                :navigate(item.path)}>
                    {item.icon}
                    <p className='text-xl'>{item.title}</p>       
                </div>)}

            </div>
            <div className='py-10'>

                <Button sx={{width:"100%", borderRadius:"29px", py:"15px", bgColor:"#1e88e5"}}
                variant='contained'>
                Post
                </Button>

            </div>
        </div>

        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Avatar alt="username" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'/>
                <div>
                <span>Jaiwin Prince</span>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Navigation