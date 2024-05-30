import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'

const HomePage = () => {
  return (
    
    <Grid container className='px-5 lg:px-36 justify-between'>

        <Grid item xs={0} lg={2} xl={3}className='hidden lg:block lg:justify-center lg:items-center w-full relative'>
        <div className='sticky top-0 h-screen'>
          <Navigation />
        </div>
        </Grid>

        <Grid item xs={12} lg={4} xl={5}className='w-full relative'>
          <HomeSection/>
        </Grid>

        <Grid item xs={0} lg={3} xl={2} className='hidden lg:block w-full relative'>
        <p className='text-center'> right part</p>
        </Grid>

    </Grid>

  )
}

export default HomePage