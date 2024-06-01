import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import news from '../../images/news.png';
import { Avatar, Button, Box, Tab, Tabs } from '@mui/material';
import verified from '../../images/verified.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import PostCard from '../HomeSection/PostCard';
import ProfileModal from './ProfileModal';


const Profile = () => {
    const [tabValue, setTabValue]=useState("1")
    const navigate = useNavigate();
    const [openProfileModal, setOpenprofileModal]=useState(false);
    const handleOpenProfileModel = () => setOpenprofileModal(true);
    const handleClose = () => setOpenprofileModal(false);

    const handleBack = () => navigate(-1);


    const handleFollowUser = () => {
        console.log("follow user")
    }

    const handleTabChange=(event, newValue)=>{
        setTabValue(newValue)

        if(newValue===4){
            console.log("liked posts")
        } else if(newValue==1){
            console.log("users posts")
        }

    }

    return (
        <div>
            <section className={`bg-white z-50 flex-center sticky top-0 bg-opacity-95`}>

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
                            variant='contained' sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}</Button>}
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
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Milton Keynes, UK</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Apr 2023</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>380</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>1M</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Ripples" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,1,1,1].map((item)=><PostCard/>)}
                        </TabPanel>
                        <TabPanel value="2">User replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}/>
            </section>
        </div>
    )
}

export default Profile