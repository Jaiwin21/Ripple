import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import news from '../../images/news.png';
import { Avatar, Button } from '@mui/material';

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

                    {false ? <Button
                        onClick={handleOpenProfileModel}
                        variant='contained' sx={{ borderRadius: "20px" }}>Edit profile</Button> : <Button
                            onClick={handleFollowUser}
                            variant='contained' sx={{ borderRadius: "20px" }}>{true?"Follow":"Unfollow"}</Button>}


                </div>
            </section>
        </div>
    )
}

export default Profile