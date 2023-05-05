'use client'

// import DatatableComponent from '@/app/component/datatable-component'
import React, { FC, useEffect, useState } from 'react'
import { data } from '../../../component/data'
import Link from 'next/link'
import { BiBookAdd } from 'react-icons/bi'
import { CourseInfoApi } from '@/app/services/admin-services'

interface pageProps {
  
}

interface CourseData {
  id: string;
  name: string;
  path: string;
  type: string;
  starred: boolean;
  tags: string[];
}


const Page: FC<pageProps> = () => {
  const [data, setData] = useState<CourseData[]>([]);

  useEffect(() => {
    CourseInfoApi.get().then((res:any) => {
      setData(res);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return (
  <div className='p-4'>
    <div className='flex justify-between'>
      <h2>Sistem Informasi Data Science</h2>
      <Link href={'/admin/course-info/add'}>
        <span className='flex'>
          Create Course
          <BiBookAdd className="ml-2 h-5 w-5" />
        </span>
      </Link>
      {JSON.stringify(data)}
    </div>
    {/* <DatatableComponent
      columns = {[
        { title: "Identifier", value: "id" },
        { title: "Name", value: "name" },
        { title: "Location", value: "path" },
        { title: "Type", value: "type" },
        { title: "Favorite", value: "starred" }
      ]}
      data={data}
      checkbox={true}
    /> */}
  </div>
  )
}

export default Page
