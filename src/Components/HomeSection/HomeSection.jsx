import { Avatar } from '@mui/material'
import React from 'react'

const HomeSection = () => {
  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-al font-bold opacity-90'>Home</h1>
        </section>
        <section className={`pb-10`}>
            <div>
                <Avatar alt="username" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'/>
                <div className='w-full'>
                    <form>
                        <div>
                            <input type="text" name="content" placeholder="Make a ripple?" className={`border-none outline-none text-al bg-transparent`} />
                        </div>
                    </form>
                </div>
            </div>

        </section>

    </div>
  )
}

export default HomeSection