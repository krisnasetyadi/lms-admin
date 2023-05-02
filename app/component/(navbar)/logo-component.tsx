import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'

interface LogoComponentProps {
  
}

const LogoComponent: FC<LogoComponentProps> = ({}) => {
  return (
  <div className='p-2 grid place-items-center'>
    <FaUserCircle className="h-6 w-6" />
  </div>
  )
}

export default LogoComponent