import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useGlobalContext } from '../context/GlobalContext'
import {demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utlis/constants'
const VideoCard = ({video,disliked}) => {
    const [liked,setLiked] = useState(false)
    const isDisliked = disliked;
    const videoData = video;
    const id = video.id;
    const videoId = id.videoId;
    const snippet = video.snippet
    // console.log(videoId,snippet)
    const {state,dispatch} = useGlobalContext();
    const {watchLater} = state
  return (
    <Card sx={{width:{  xs:'100%',sm:'331px', md:'260px'},boxShadow:'none', borderRadius:'0'}} >
        <Link to={videoId ?`/video/${videoId}` : demoVideoUrl  } >
        <CardMedia  image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{
            xs:'100%',
            sm:'359px',
            md:'261px'
        },height:'180px'}}
        onClick={()=> 
            dispatch({
                type:'ADD_TO_HISTORY',
                payload:{
                    data:videoData
                }
            })}
        />
        </Link>
        <CardContent
        sx={{backgroundColor:'#1e1e1e', height:'106px'}}
        >
        <Link to={videoId ?`/video/${videoId}` : demoVideoUrl  }>
        <Typography variant='subtitle1' fontWeight="bold"color ="#FFF" onClick={()=> 
            dispatch({
                type:'ADD_TO_HISTORY',
                payload:{
                    data:videoData
                }
            })}>
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
            border:'none',
            background:'none',
            textAlign:'center',
            color:'white',
            borderRadius:'4px',
            cursor:'pointer'
        }} >{ isDisliked ? <i class="fa-sharp fa-regular fa-thumbs-down" onClick={()=>{
            dispatch({
                type:'REMOVE_FROM_LIKE',
                payload:{
                    data:videoData
                }
            })
            setLiked(!liked)
    }}></i> :  <i style={{
            fontSize:'1.2rem',
            color:liked ? 'red' : 'white'
        }} class="fa-solid fa-thumbs-up" onClick={()=>{
            dispatch({
                type:'ADD_TO_LIKE',
                payload:{
                    data:videoData
                }
            })
            setLiked(!liked)
    }}></i>}</button>
       
       { watchLater.includes(videoData) ? <button className='btn' style={{
            padding:'5px',
            paddingRight:'15px',
            marginRight:'10px',
            border:'1px solid #FC1503',
            background:'none',
            textAlign:'center',
            color:'white',
            borderRadius:'4px',
            cursor:'pointer'
        }} onClick={()=>{
            dispatch({
                type:'REMOVE_FROM_WATCH_LATER',
                payload:{
                    data:videoData
                }
            })
    }}> Remove</button> : <button className='btn' style={{
            padding:'5px',
            paddingRight:'15px',
            marginRight:'10px',
            border:'1px solid #FC1503',
            background:'none',
            textAlign:'center',
            color:'white',
            borderRadius:'4px',
            cursor:'pointer'
        }} onClick={()=>{
            dispatch({
                type:'ADD_TO_WATCHLIST',
                payload:{
                    data:videoData
                }
            })
    }}>  Watch Later</button> }
        </CardContent>
    </Card>
  )
}

export default VideoCard