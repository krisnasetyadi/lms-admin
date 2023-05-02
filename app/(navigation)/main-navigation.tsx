import React, { FC, ReactNode } from 'react'

interface MainNavigationProps {
  
}

interface ContentProps {
  children?: ReactNode;
}

export const MainNavigation: FC<MainNavigationProps> = ({}) => {
  return (
  <div className='flex'>
    <Content />
  </div>
  )
}

export const Content: FC<ContentProps>  = ({
  children
}) => {
    return (
        <div className='flex-col items-center justify-between w-full p-10 bg-[#eae8ea]'>
          <div className='min-h-screen bg-white rounded-md'>
           {children}
          </div>
        </div>
    )
}