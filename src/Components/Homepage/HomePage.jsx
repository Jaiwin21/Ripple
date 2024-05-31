import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import PostCard from '../HomeSection/PostCard'
import RightPart from '../RightPart/RightPart'

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      {/* Navigation bar on the left */}
      <Grid item xs={0} lg={2} xl={3} className='hidden lg:flex lg:justify-center lg:items-start w-full relative'>
        <div className='sticky top-0 h-screen'>
          <Navigation />
        </div>
      </Grid>

      {/* Main content in the center */}
      <Grid item xs={12} lg={6} xl={4} className='px-5 lg:px-9 w-full relative'>
        <HomeSection />
        <section>
          {[1, 1, 1, 1].map((item, index) => (
            <PostCard key={index} />
          ))}
        </section>
      </Grid>

      {/* Right side component */}
      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <div className='sticky top-0'>
          <RightPart/> 
        </div>
      </Grid>
    </Grid>
  );
}

export default HomePage