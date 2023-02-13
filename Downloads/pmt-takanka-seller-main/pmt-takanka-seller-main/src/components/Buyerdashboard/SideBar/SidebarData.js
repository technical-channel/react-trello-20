import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as  RiDashboardFill from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: '/assets/icon1.png',

  },
  {
    title: 'Projects',
    path: '/projects',
    icon: '/assets/icon2.png',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Create Project',
        path: '/projects/create',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Project List',
        path: '/project/projectlist',
        // icon: <IoIcons.IoIosPaper />
      },

    ]
  },

  // {
  //   title: 'Tanaka',
  //   path: '/tanaka',
  //   icon: <IoIcons.IoIosPaper />
  // },
  {
    title: 'Connections',
    path: '/connections',
    icon: '/assets/icon3.png',
  },

];
