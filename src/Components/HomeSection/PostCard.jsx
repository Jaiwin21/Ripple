import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import verified from '../../images/verified.png'; 

const PostCard = () => {
    const navigate=useNavigate();
  return (
    <div className=''>
        {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You repost</p>
        </div> */}
        <div className=' flex space-x-5'>
            <Avatar 
            onClick={()=>navigate(`/profile/${6}`)}
            className='cursor-pointer' 
            alt='username' 
            src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'/>

            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex curosr-pointer items-center space-x-2'>
                        <span className='font-semibold'>Jaiwin Prince</span>
                        <span className='text-gray-600'>@Jaiwin21 . 2m</span>
                        <img className='ml-2 w-5 h-5' src={verified} alt="" />

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default PostCard