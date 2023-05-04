/* eslint-disable import/no-anonymous-default-export */
import { AiFillHome } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { RiDiscussFill } from 'react-icons/ri'

export default {
  LectureSidebarMenu: [
    {
      parentName: 'Admin',
      childMenu: [
        {
          icon: AiFillHome,
          title: 'Course Info',
          route: '/course-info',
        },
        {
          icon: FaBook,
          title: 'Learning Activity',
          route: '/learning-activity',
          childMenu: [
            {
              icon: FaBook,
              title: 'Learning Activity',
              route: '/course-info/learning-activity'
            },
            {
                icon: RiDiscussFill,
                title: 'Discussion',
                route: '/course-info  /discussion'
            },
          ]
        },
        {
            icon: RiDiscussFill,
            title: 'Discussion',
            route: '/discussion'
          },
      ]
    },
    {
      parentName: 'Support',
      childMenu: [
        {
          icon: AiFillHome,
          title: 'Support Info',
          route: '/support-info'
        },
        {
          icon: FaBook,
          title: 'Grade',
          route: '/grade'
        },
        {
            icon: RiDiscussFill,
            title: 'Support Chat',
            route: '/support-chat'
          },
      ]
    },
  
  
  ],
//   DiscussionSidebarMenu: [
//   ]
}
