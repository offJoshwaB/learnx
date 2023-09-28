import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentIcon=(topic) => (
        <div className='sidebar__recentIcon'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>

    );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://kinsta.com/wp-content/uploads/2020/08/web-safe-fonts-1024x512.jpg' alt=''/>
            <Avatar className='sidebar__avatar' />
            <h2>Joshwa</h2>
            <h4>offJoshwaB@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__starNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,567</p>

            </div>
            
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentIcon('react.js')}
            {recentIcon('Programming')}
            {recentIcon('softwareengineering')}
            {recentIcon('frontenddesigner')}
            {recentIcon('python')}
            {recentIcon('MYSQL')}

        </div>
    </div>
  )
}

export default Sidebar
