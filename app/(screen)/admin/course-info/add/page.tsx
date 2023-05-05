'use client'

import { FC, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import * as yup from 'yup'
import Input from '@/app/component/input-component'

interface DocumentationComponentProps {

}

interface FormDataProps  {
    course_title: string
    course_info: string
}

const schema = yup.object().shape({
    course_title: yup.string().max(3).required(),
    course_info: yup.string().max(4)
})

const DocumentationComponent: FC<DocumentationComponentProps> = () => {
    const [errors, setErrors] = useState({})
    const onSubmit = async (e:any ) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const data = await schema.validate(Object.fromEntries(formData.entries()));
            setErrors({})
            console.log('validatedData', data)
        } catch (error) {
            if(error instanceof yup.ValidationError) {
                setErrors({[error.path as string]: error.message})
            } else {
                throw error
            }
        }    
    }
    
    return (
        <div className='h-[500px] w-2/3 bg-white'>
            <form method="post" className='flex p-10' onSubmit={onSubmit}>
            <Input 
              name="course_title"
              label="Course Title"
              errors={errors}
            />
            <Input 
              name="course_info"
              label="Course Info"
              errors={errors}
            />
            <button type='submit' className='btn btn-md rounded-[20px] font-bold px-8 ml-4'>Submit</button>
            </form>
        </div>
    )
}

export default DocumentationComponent