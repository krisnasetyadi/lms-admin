import ClientOnly from '@/app/component/client-component'
// import DatatableComponent from '@/app/component/datatable-component'
import { FC } from 'react'
import { data } from '../../../component/data'
import Link from 'next/link'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {

  return (
  <div className='p-4'>
    <div className='flex justify-between'>
      <h2>Sistem Informasi Data</h2>
      <Link href={'/admin/course-info/add'}>Create Course</Link>
    </div>
    {/* <ClientOnly>
    <DatatableComponent
      columns = {[
        { title: "Identifier", value: "id" },
        { title: "Name", value: "name" },
        { title: "Location", value: "path" },
        { title: "Type", value: "type" },
        { title: "Favorite", value: "starred" }
      ]}
      data={data}
      checkbox={true}
    />
    </ClientOnly> */}
  </div>
  )
}

export default page