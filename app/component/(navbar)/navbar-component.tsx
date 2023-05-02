'use client'

import { FC } from 'react'
import Logo from './logo-component'
import { RootStore, store } from '@/app/store'
import { setIsOpen } from '@/app/store/sidebarReducer'
import { useSelector } from 'react-redux'

interface NavbarComponentProps {
  
}

const NavbarComponent: FC<NavbarComponentProps> = ({}) => {
 
  const {isOpen} = useSelector((state: RootStore )=> state.open)
  const onClickDrawer = () => store.dispatch(setIsOpen(!isOpen))
  
  return (
    <nav className='bg-red-400'>
        {/* max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 */}
        <div className='max-w-[2520px] mx-auto'>
            <div className='flex flex-row justify-between'>
                <button 
                  onClick={onClickDrawer} 
                  type="button" 
                  className="h-10 w-10 bg-blue-300"> 
                  Coba 
                </button>
                <Logo/>
            </div>
        </div>
    </nav>
  )
}

export default NavbarComponent