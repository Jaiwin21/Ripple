import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate=useNavigate();
    const handleBack=()=>navigate(-1);
    return (
    <div>
        <section className={`z-50 flex-center sticky top-0 bg-opacity-95`}>

            <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}/>
            <h1 className='py-5 text-al font-bold opacity-90 ml-5'>@Jaiwin21</h1>

        </section>
    </div>
  )
}

export default Profile