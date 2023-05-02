import './globals.css'
import { Inter } from 'next/font/google'
import Client from './component/client-component'
import NavbarComponent from './component/(navbar)/navbar-component'
import { Content } from './(navigation)/main-navigation'

import SideBarComponent from './component/sidebar-component'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Client>
          <NavbarComponent/>
        </Client>
        <div className='flex'>
          <Client>
            <SideBarComponent />
          </Client>
          <Content>
            {children}
          </Content>
        </div>
      </body>
    </html>
  )
}
