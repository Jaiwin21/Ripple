import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import news from '../../images/news.png';
import { Avatar, Button } from '@mui/material';
import verified from '../../images/verified.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }

    const handleFollowUser = () => {
        console.log("follow user")
    }

    return (
        <div>
            <section className={`z-50 flex-center sticky top-0 bg-opacity-95`}>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-al font-bold opacity-90 ml-5'>@Jaiwin21</h1>

            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src={news} alt="" />
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='@Jaiwin21'
                        src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ? <Button
                        onClick={handleOpenProfileModel}
                        variant='contained' sx={{ borderRadius: "20px" }}>Edit profile</Button> : <Button
                            onClick={handleFollowUser}
                            variant='contained' sx={{ borderRadius: "20px" }}>{true? "Follow":"Unfollow"}</Button>}
                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Jaiwin Prince</h1>
                        {true && <img className='ml-2 w-5 h-5' src={verified} alt="" />}
                    </div>
                </div>
                <h1 className='text-gray-500'>@Jaiwin21</h1>
                <div className='mt-2 space-y-3'>
                        <p>Hello, I am Jaiwin - an aspiring software engineer. Feel free to see some of my other projects on my website.</p>
                        <div className='py-1 flex space-x-5'>
                            <div className='flex items-center text-gray-500'>
                                <BusinessCenterIcon/>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Profile