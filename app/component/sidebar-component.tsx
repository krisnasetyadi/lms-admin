'use client'

import React, { FC, useState } from "react"
import { RootStore } from '@/app/store'
import { useSelector } from 'react-redux'
import Image from "next/image"

interface SidebarComponentProps { 

}

const SideBarComponent: FC<SidebarComponentProps> = ({}) => {
  const { isOpen } = useSelector((state: RootStore )=> state.open)

    return (
        <div className={`${isOpen ? 'w-72' : 'w-20'} duration-300 h-screen bg-purple-500`}>
            <div className="mt-4 mx-4 relative overflow-auto overflow-x-hidden h-[85vh]">
            <span className="uppercase px-4 text-gray-500">Docs</span>
              <ul className="space-y-4 mb-12 px-4 mt-8">
            <li>
              <a href="" className="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                <img
                  src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/icons/favorites.svg" 
                  className="w-6" 
                  alt="icon" 
                />
                {isOpen ? 'Dashboard' : ''}
              </a>
            </li>
           </ul>
            </div>
        </div>
    )
}

export default SideBarComponent