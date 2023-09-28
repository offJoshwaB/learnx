import React from 'react'
import './post.css'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InputOptions from './InputOptions';
import { Avatar } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendIcon from '@mui/icons-material/Send';


function post({ name, description, message, photourl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>


            </div>
        </div>

        <div className='post__body'>
            
            <p>{message}</p>

        </div>
        <div className='post__buttons'>
            <InputOptions Icon={ThumbUpIcon} title='Like' color='black' />
            <InputOptions Icon={CommentIcon} title='Comment' color='black' />
            <InputOptions Icon={ShareIcon} title='Share' color='black' />
            <InputOptions Icon={BookmarkIcon} title='Bookmark' color='black' />
            <InputOptions Icon={SendIcon} title='Send' color='black' />
        </div>
      
    </div>
  )
}





export default post
