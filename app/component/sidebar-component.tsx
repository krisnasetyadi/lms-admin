'use client'

import React, { FC, ReactNode, useEffect, useState } from "react"
import { RootStore } from '@/app/store'
import { useSelector } from 'react-redux'
import Image from "next/image"
import SLogo from './../../public/s-logo.jpg'
import Link from "next/link"
import Menu from '../(navigation)/constant'
import { usePathname } from "next/navigation"
import { TbSquareRoundedChevronDownFilled } from 'react-icons/tb'

interface SidebarComponentProps { 

}

const SideBarComponent: FC<SidebarComponentProps> = ({ }) => {
  const pathname = usePathname()
  const { isOpen } = useSelector((state: RootStore )=> state.open)
  const [onOpen, setOnOpen] = useState<boolean>(false)
  const { LectureSidebarMenu } = Menu
  const onOpenMenu = () => {
    setOnOpen(prev => !prev)
  }
    return (
      <div className="flex">
        <div className={`${isOpen ? 'w-72' : 'w-20'} duration-300 h-full bg-[#3346d7]`}>
          <div className="mt-4 mx-4 relative overflow-auto overflow-x-hidden h-[85vh]">
          <div className="flex p-2 border border-slate-100 rounded-xl">
            <Image 
              src={SLogo} 
              alt="logo" 
              className="h-10 w-10 rounded-xl" 
            />
            <div className="grid place-items-center">
              <p className="px-4 text-white font-semibold uppercase">Sinau.Id</p>
            </div>
          </div>
          <ul className="space-y-4 mb-12 px-4 mt-8">
            {LectureSidebarMenu && LectureSidebarMenu.find(f => f.parentName.toLowerCase() === pathname.split('/')[1])?.childMenu.map((item, idx) => {
              const {title, icon:Icon, route} = item
              if (item.childMenu) {
                return (
                  <li className="" key={`${title}-${idx}`}>
                  <div className="flex justify-between">
                    <Link href={`${pathname.split('/')[1]}/${route}`} className="flex gap-4 hover:text-gray-800 transition">
                      <Icon className="w-4 h-4 text-[#e6fbff]" />
                      {isOpen && <p className="text-[#e6fbff] font-semibold text-sm">{title}</p>}
                    </Link>
                    <TbSquareRoundedChevronDownFilled 
                      onClick={onOpenMenu} 
                      className={`h-6 w-6 text-[#e6fbff] ${onOpen ? 'rotate-90' : '' } duration-500`}
                    />
                  </div>
                  {!onOpen && (<ul className="pl-4 pt-2">
                    {item.childMenu.map((child, childIdx) => {
                    const {title: childTitle, icon:ChildIcon, route:childRoute} = child
                    return (
                      <li className="py-2" key={`${idx}-${childIdx}`}>
                        <Link href={`${pathname.split('/')[1]}/${childRoute}`} className="flex gap-4 hover:text-gray-800 transition">
                          <ChildIcon className="w-4 h-4 text-[#e6fbff]" />
                          {isOpen && <p className="text-[#e6fbff] font-semibold text-sm">{childTitle}</p>}
                        </Link>
                      </li>
                    )})}
                  </ul> )}
                </li>
                )
            }
              return (
              <li key={`${title}-${idx}`}>
                <Link href={`${pathname.split('/')[1]}/${route}`} className="flex gap-4 hover:text-gray-800 transition">
                  <Icon className="w-4 h-4 text-[#e6fbff]" />
                  {isOpen && <p className="text-[#e6fbff] font-semibold text-sm">{title}</p>}
                </Link>
              </li>
            )})}
          </ul>
          </div>
        </div>
      </div>
    )
}

export default SideBarComponent