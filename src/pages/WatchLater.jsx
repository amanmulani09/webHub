import React from 'react'
import {Stack,Box} from '@mui/material'
import ChannelCard from '../components/ChannelCard'
import VideoCard from '../components/VideoCard'
import { useGlobalContext } from '../context/GlobalContext'
const WatchLater = () => {
    const {state,dispatch} = useGlobalContext();
    const {watchLater} = state

  console.log(watchLater)
  if(!watchLater) return 'Loading....'
  return (
    <>
    <h2 style={{color:'white', margin:'15px'}}>Watch Later videos:</h2>
    <button style={{
      position:'absolute',
      right:'4%',
      padding:'5px',
      border:'1px dotted red',
      background:'none',
      color:'red',
      fontSize:'1.2rem',
      borderRadius:'5px',
      cursor:'pointer',
      top:'120px'
    }} onClick={()=> dispatch({
      type:'CLEAR_WATCH_LATER'
    })}>Clear All</button>
    <Stack
    direction={'row'}
    flexWrap="wrap"
     justifyContent="start" gap={2}
     sx={{marginLeft:'30px'}}
     > 
    {watchLater.map((item,idx)=>{
return(
    <Box key={idx}>
      {item.id.videoId && <VideoCard video={item} disliked/>}
      {item.id.channelId && <ChannelCard channelDetail={item} />}
  </Box>
)
    })}
    </Stack>
    </>
  )
}

export default WatchLater