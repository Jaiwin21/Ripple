import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import verified from '../../images/verified.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import post from '../../images/post.webp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import ReplyModal from './ReplyModal.jsx';

const PostCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModal, setOpenReplyModal]=useState(false);
    const handleOpenReplyModel = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeletePost = () => {
        console.log("Delete ripple")
        handleClose();
    }


    const handleCreatePost=()=>{
        console.log("Handle create ripple")
    }

    const handleLikePost=()=>{
        console.log("Handle like post");
    }
    return (
        <React.Fragment>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You repost</p>
        </div> */}
            <div className=' flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' />

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex curosr-pointer items-center space-x-2'>
                            <span className='font-semibold'>Jaiwin Prince</span>
                            <span className='text-gray-600'>@Jaiwin21 . 2m</span>
                            <img className='ml-2 w-5 h-5' src={verified} alt="" />

                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                                <MenuItem onClick={handleDeletePost}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <div  onClick={()=>navigate(`/post/${3}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>Full stack project</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src={post} alt="" />

                        </div>
                        <div className='py-5 flex flex-wrap justify-start items-center'>
                            <div className='space-x-3 px-2 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p>43</p>
                            </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon
                                onClick={handleCreatePost}
                                className='cursor-pointer'
                                />
                                <p>54</p>

                            </div>

                            <div className={`${true? "text-pink-600":"text-gray-600"} px-2 space-x-3 flex items-center`}>
                                {true? <FavoriteIcon
                                onClick={handleLikePost}
                                className='cursor-pointer'/>:<FavoriteOutlined
                                onClick={handleLikePost}
                                className='cursor-pointer'/>}
                                <p>54</p>

                            </div>

                            <div className='space-x-3 px-2 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p>700</p>
                            </div>

                            <div className='space-x-3 px-2 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>
            <section>
                <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
            </section>
        </React.Fragment>
    )
}

export default PostCard