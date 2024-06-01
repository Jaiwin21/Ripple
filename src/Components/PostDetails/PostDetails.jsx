import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import PostCard from '../HomeSection/PostCard';
import { Divider } from '@mui/material';

const PostDetails = () => {
  
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  
  return (

    <React.Fragment>

      <section className={`bg-white z-50 flex-center sticky top-0 bg-opacity-95`}>

        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className='py-5 text-al font-bold opacity-90 ml-5'>Ripples</h1>

      </section>

      <selection>
        <PostCard/>
        <Divider sx={{margin:"2rem 0rem"}}/>
      </selection>

      <selection>
        {[1,1,1,1].map((item)=><PostCard/>)}
      </selection>

    </React.Fragment>

  )
}

export default PostDetails