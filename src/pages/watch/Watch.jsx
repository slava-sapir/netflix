import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ArrowBackOutlined} from '@material-ui/icons';
import './watch.scss';

export default function Watch() {

  const location = useLocation();
  const youtubeId = location.youtubeId;
  //const movie = location.movie;
  const videoSourse =`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&modestbranding=1&controls=0>`;
  
  return (
    <div className='watch'>
        <Link to='/' className="link">
          <div className='back'>
          <ArrowBackOutlined />
            Home
          </div>
        </Link>
        <iframe className='video' title="video frame" allowFullScreen controls="0" src={videoSourse}></iframe>
        {/* <video title="trailer" className='video' 
        src={videoSourse}
        autoPlay 
        progress="true"
        controls
        //src ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        //src="https://www.youtube.com/embed/aIqVLyNQa5Y"
        //src="https://www.youtube.com/watch?v=aIqVLyNQa5Y"
        //src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"
        /> */}
    </div>
  )
}
