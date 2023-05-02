'use client'

import React, { FC, ReactNode } from "react"
import { RootStore } from '@/app/store'
import { useSelector } from 'react-redux'
import type { MenuProps } from '../types/type'
import Image from "next/image"
import SLogo from './../../public/s-logo.jpg'
import Link from "next/link"
import Menu from '../(navigation)/constant'
import RoleContent from './role-content-component'

interface SidebarComponentProps { 

}

const SideBarComponent: FC<SidebarComponentProps> = ({ }) => {
  const { isOpen } = useSelector((state: RootStore )=> state.open)
  const { LectureSidebarMenu } = Menu

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
            {LectureSidebarMenu && LectureSidebarMenu.map((item, idx) => {
              const {title, icon:Icon, route} = item
              return (
              <li key={`${title}-${idx}`}>
                <Link href={`${route}`} className="flex gap-4 hover:text-gray-800 transition">
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