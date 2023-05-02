import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'

interface LogoComponentProps {
  
}

const LogoComponent: FC<LogoComponentProps> = ({}) => {
  return (
  <div className='p-2 grid place-items-center'>
    <div className='flex border-l-2 border-solid pl-4'>
      <p className='pr-4 xl:pr-6 md:pr-4 sm:pr-2 text-slate-500'>Welcome, User name</p>
     <FaUserCircle className="h-6 w-6" />
    </div>
  </div>
  )
}

export default LogoComponent