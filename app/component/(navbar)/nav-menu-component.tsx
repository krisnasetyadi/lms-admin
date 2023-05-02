import { FC } from 'react'
import Menu from '../../(navigation)/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavMenuComponentProps {
  
}

const NavMenuComponent: FC<NavMenuComponentProps> = ({}) => {
  const { LectureSidebarMenu } = Menu
  const pathname = usePathname()
  return (
  <div className='flex flex-row mx-auto my-auto'>
    {LectureSidebarMenu && LectureSidebarMenu.map((item, idx) => (
        <Link className='px-2' key={`${item.parentName}-${idx}`} href={`${item.parentName.toLowerCase()}/${item.childMenu.map(i => i.route)[0]}`}>
            <p className={`${pathname.split('/')[1] === item.parentName.toLowerCase() ? 'font-bold' : '' } text-sm`}>{item.parentName}</p>
        </Link>
    ))}
  </div>
  )
}

export default NavMenuComponent