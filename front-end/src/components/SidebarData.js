import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome style = {{color: '#01575C'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'My Friends',
        path: '/myfriends',
        icon: <FaIcons.FaUserFriends style = {{color: '#01575C'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoIcons.IoIosSettings style = {{color: '#01575C'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <BsIcons.BsFillPersonFill style = {{color: '#01575C'}}/>,
        cName: 'nav-text'
    },
    
]