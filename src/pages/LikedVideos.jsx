import React from 'react'
import {Stack,Box} from '@mui/material'
import ChannelCard from '../components/ChannelCard'
import VideoCard from '../components/VideoCard'
import { useGlobalContext } from '../state/GlobalContext'
const LikedVideos = () => {
    const {state} = useGlobalContext();
    const {likedVideos} = state

  console.log(likedVideos)
  if(!likedVideos) return 'Loading....'
  return (
    <Stack
    direction={'row'}
     flexWrap="wrap"
     justifyContent="start" gap={2}> 
    {likedVideos.map((item,idx)=>{
return(
    <Box key={idx}>
      {item.id.videoId && <VideoCard video={item} />}
      {item.id.channelId && <ChannelCard channelDetail={item} />}
  </Box>
)
    })}
    </Stack>
  )
}

export default LikedVideos