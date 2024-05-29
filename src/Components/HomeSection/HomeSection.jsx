import { Avatar } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup' 

const validationSchema=Yup.object().shape({
    content:Yup.string().required("Post text is required")
})

const HomeSection = () => {
    
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
                            <input type="text" name="content" placeholder="Make a ripple?" className={`border-none outline-none text-al bg-transparent`}
                            {...formik.getFieldProps("content")} />
                        </div>
                    </form>
                </div>
            </div>

        </section>

    </div>
  )
}

export default HomeSection