import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const features=["Prioritized rankings in conversations and search.",
    "Double the number of Ripples between ads in your 'For You' and 'Following timelines.'",
    "Add bold and italic text in your Ripples.",
    "Post more larger size videos and access to higher resolutions",
    "Access to BETA features."
]

export default function SubscriptionModal({handleClose, open}) {


    const [plan, setPlan]=React.useState("Anually");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center space-x-3'>

                        <IconButton onClick={handleClose} aria-label="Delete">
                            <CloseIcon />

                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg'>
                                <h1 className='text-xl pr-5'>Subscribers will get a blue checkmark to show off.</h1>
                                <img className='w-24 h-24' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="" />

                            </div>

                            <div className='flex justify-between border rounded-full px-5 py-3 border border-gray-500'>
                                <div>
                                    <span onClick={()=>setPlan("Anually")} className={`${plan==="Anually"?"text-black":"text-gray-400"} cursor-pointer`}>Anually</span>
                                    <span className='text-green-500 text-sm ml-5'>SAVE 18%</span>
                                </div>
                                <p onClick={()=>setPlan("Monthly")} className={`${plan==="monthly"?"text-black":"text-gray-400"} cursor-pointer`}>
                                    Monthly
                                </p>

                            </div>

                            <div className='space-y-3'>
                                {features.map((item)=> <div className='flex items-center space-x-5'>
                                    <FiberManualRecordIcon sx={{width:"7px", height:"7px"}}/>
                                    <p className='text-xs'>{item}</p>

                                </div>)}

                            </div>

                            <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                                <span className='line-through italic'>£180</span>
                                <span className='px-5'>£139/Year</span>
                            </div>

                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}
