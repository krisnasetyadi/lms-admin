'use client'

import { FC } from 'react'
import Logo from './logo-component'
import { RootStore, store } from '@/app/store'
import { setIsOpen } from '@/app/store/sidebarReducer'
import { useSelector } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavMenuComponent from './nav-menu-component'

interface NavbarComponentProps {
  
}

const NavbarComponent: FC<NavbarComponentProps> = ({}) => {
 
  const { isOpen } = useSelector((state: RootStore )=> state.open)
  const onClickDrawer = () => store.dispatch(setIsOpen(!isOpen))

  return (
    <nav className='bg-[#fffeff]'>
        <div className='max-w-[2520px] mx-auto xl:px-8 md:px-4 sm:px-2'>
            <div className='flex flex-row justify-between'>
                <button 
                  onClick={onClickDrawer} 
                  type="button" 
                  className="h-12"> 
                  <GiHamburgerMenu className='h-10 w-10 p-2' /> 
                </button>
      
                  <NavMenuComponent />
              
                <Logo/>
            </div>
        </div>
    </nav>
  )
}

export default NavbarComponent