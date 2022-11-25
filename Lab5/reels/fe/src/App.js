import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Video from './components/video'
import axios from './components/axios'
import Axios from 'axios'

function App() {
  const [videos, setVideos]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:9000/v2/get').then((response)=>setVideos(response.data))
    
  },[])
  return (
   <div className='app'>
    <div className='app_video'>
      {videos.map(({url,channel,description,song,likes,shares,messages})=>(
          <Video
          key={url}
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          shares={shares}
          messages={messages}/>
        ))}
    </div>
   </div>
  );
}

export default App;
