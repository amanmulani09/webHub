import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utlis/constants'
const VideoCard = ({video:{id:{
    videoId
}, snippet}}) => {
    console.log(videoId,snippet)
  return (
    <Card sx={{width:{  xs:'100%',sm:'331px', md:'260px'},boxShadow:'none', borderRadius:'0'}}>
        <Link to={videoId ?`/video/${videoId}` : demoVideoUrl  }>
        <CardMedia  image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{
            xs:'100%',
            sm:'359px',
            md:'261px'
        },height:'180px'}}
        />
        </Link>
        <CardContent
        sx={{backgroundColor:'#1e1e1e', height:'106px'}}
        >
        <Link to={videoId ?`/video/${videoId}` : demoVideoUrl  }>
        <Typography variant='subtitle1' fontWeight="bold"color ="#FFF" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}` : demoChannelUrl  }>
        <Typography variant='subtitle2' fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'grey',ml:'5px'}} />
        </Typography>
        </Link>
        <button className='btn' style={{
            padding:'5px',
            paddingRight:'15px',
            marginRight:'10px',
            border:'1px solid #FC1503',
            background:'none',
            textAlign:'center',
            color:'white',
            borderRadius:'4px',
            cursor:'pointer'
        }}>Like</button>
        <button className='btn' style={{
            padding:'5px',
            paddingRight:'15px',
            marginRight:'10px',
            border:'1px solid #FC1503',
            background:'none',
            textAlign:'center',
            color:'white',
            borderRadius:'4px',
            cursor:'pointer'
        }}>Watch Later</button>
        </CardContent>
    </Card>
  )
}

export default VideoCard