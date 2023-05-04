'use client'

import { FC } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { BsCurrencyDollar } from 'react-icons/bs'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '@/app/component/input-component'

interface DocumentationComponentProps {

}

type FormData = {
    components: string
}

const schema = yup.object().shape({
    components: yup.string().required()
})

const DocumentationComponent: FC<DocumentationComponentProps> = () => {
    const { 
        register, 
        handleSubmit, 
        control,
        formState: { errors } 
    } = useForm<FieldValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log('data', data)
    }
    return (
        <div className='h-[500px] w-2/3 bg-white'>
            <form className='flex p-10' onSubmit={handleSubmit(onSubmit)}>
            <Input 
              name="course_title"  
              label="Course Title" 
              register={register}
              errors={errors}
              control={control}
            />
            <button type='submit' className='btn btn-md rounded-[20px] font-bold px-8 ml-4'>Submit</button>
            </form>
        </div>
    )
}

export default DocumentationComponent