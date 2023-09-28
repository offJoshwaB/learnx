import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import AirplayIcon from '@mui/icons-material/Airplay';
import HeaderOptions from './HeaderOptions';
import CabinIcon from '@mui/icons-material/Cabin';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import VerticalAlignTopSharpIcon from '@mui/icons-material/VerticalAlignTopSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Header() {
  return (
    <div className='header'>

      
      <div className='header__left'>
        <div className='header__lefticon'>
          <FormatListBulletedIcon/>

        </div>
        
        <div className='header__search'>
            <SearchIcon />
            <input type="text" />

        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon = {CabinIcon} title="Home" />
        
        <HeaderOptions Icon={AppsSharpIcon} title="SignIn"/>
        
        <HeaderOptions Icon = {SchoolSharpIcon} title = "LearnHub" />
        <HeaderOptions Icon = {Diversity3Icon} title="Networks" />
        
        <HeaderOptions Icon ={NotificationsSharpIcon} title="Notification" />
        <HeaderOptions Icon = {VerticalAlignTopSharpIcon} title = "Top Entrepreneurs" />
        
        




      </div>
    </div>
  )
}

export default Header;
