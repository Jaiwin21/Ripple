import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react';
import * as Yup from 'yup' 
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PostCard from './PostCard';


const validationSchema=Yup.object().shape({
    content:Yup.string().required("Post text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage]=useState(false);
    const [selectImage, setSelectedImage]=useState("");

    const handleSubmit=(values)=>{
        console.log("Values ",values)
    }
    
    const formik=useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema
    })

    const handleSelectImage=(event)=>{
        setUploadingImage(true);
        const imgUrl=event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-al font-bold opacity-90'>Home</h1>
        </section>
        <section className={`pb-10`}>
            <div className='flex space-x-5'>
                <Avatar alt="username" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'/>
                <div className='w-full'>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" name="content" placeholder="Make a ripple?" className={`border-none outline-none text-al bg-transparent`}
                            {...formik.getFieldProps("content")} />
                            {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                            )}
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex space-x-5 items-center'>
                                <label className='flex items-center space-x-2 rounded-md cursor-pointer'>

                                <ImageIcon className='text-[#1d9bf0]'/>
                                <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage}/>

                                </label>

                                <FmdGoodIcon className='text-[#1d9bf0]'/>
                                <TagFacesIcon className='text-[#1d9bf0]'/>

                            </div>
                            <div>
                                <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgColor: "#1e88e5" }}
                        variant='contained' type='submit'>
                                    Post
                                </Button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </section>
        <section>
            <PostCard/>
        </section>

    </div>
  )
}

export default HomeSection