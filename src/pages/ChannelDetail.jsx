import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import Videos from './Videos';
import ChannelCard from '../components/ChannelCard';
import { fetchFromAPI } from '../utlis/fetchFromAPI';

const ChannelDetail = () => {
  const [ChannelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([])
  const {id} = useParams();
  console.log(id)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{
      setChannelDetail(data?.items[0])
    })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{
     setVideos(data?.items)
    })
  },[id])
  console.log(ChannelDetail)
  console.log(videos)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          zIndex:10,
          height:'300px'
        }}

        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-103px"/>
        <Box display="flex" p="2">
          <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail