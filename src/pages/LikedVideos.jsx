import React from 'react'
import {Stack,Box} from '@mui/material'
import ChannelCard from '../components/ChannelCard'
import VideoCard from '../components/VideoCard'
import { useGlobalContext } from '../state/GlobalContext'
const LikedVideos = () => {
    const {state,dispatch} = useGlobalContext();
    const {likedVideos} = state

  console.log(likedVideos)
  if(!likedVideos) return 'Loading....'
  return (
    <>
    <h2 style={{color:'white', margin:'15px'}}>Liked Videos</h2>
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
      type:'CLEAR_LIKED_VIDEOS'
    })}>Clear All</button>
    <Stack
    direction={'row'}
    flexWrap="wrap"
     justifyContent="start" gap={2}
     sx={{marginLeft:'30px'}}
     > 
    {likedVideos.map((item,idx)=>{
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

export default LikedVideos