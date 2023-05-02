/* eslint-disable import/no-anonymous-default-export */
import { AiFillHome } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { RiDiscussFill } from 'react-icons/ri'

export default {
  LectureSidebarMenu: [
    {
      icon: AiFillHome,
      title: 'Course Info',
      route: '/course-info'
    },
    {
      icon: FaBook,
      title: 'Learning Activity',
      route: '/learning-activity'
    },
    {
        icon: RiDiscussFill,
        title: 'Discussion',
        route: '/discussion'
      },
  
  ],
//   DiscussionSidebarMenu: [
//   ]
}
