
import './Feed.css';
import React, {useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Post from './post';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
function Feed() {
    const [posts, setPosts] = useState([]);
  return (
    

    <div className='feed'>
      <div className='.feed__inputContanier'>
        <div className='feed__input'>
            <CreateIcon/>
            <form>
                <input type='text'/>
                <button onClick={LocalShippingIcon} type='submit' >Send</button>
            </form>
        </div>
        <div className='feed__inputOptions'>
            <InputOptions Icon={ImageIcon} title='Photo' color=''/>
            <InputOptions Icon={YouTubeIcon} title='Video' color=''/>
            <InputOptions Icon={EventAvailableIcon} title='Event' color=''/>
            <InputOptions Icon={ContactPageIcon} title='Write' color=''/>
        </div>
      </div>
      {posts.map((post)=>(
        <Post />

      ))}
      <Post name='Joshwa' description='this is a test' message='wow this worked' photourl=''/>

    </div>
  )

}
export default Feed
