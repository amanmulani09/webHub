import React from 'react'
import {Box,CardContent,cardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utlis/constants';
import {Link} from 'react-router-dom';
const ChannelCard = ({channelDetail,marginTop}) => (
    <Box
    sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: {xs: '316px', md:'290px'},
        height:'295px',
        margin:'auto',
        marginTop
    }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center', textAlign:'center', color:'#fff'}}>
        <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
        alt={channelDetail?.snippet?.title}
        sx={{borderRadius:'50%',height:'180px', width:'180px',mb:2, border:'1px solid #e3e3e'}}

        />
        <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:'grey',ml:'5px'}} />

        </Typography>
        {channelDetail?.statistics?.subscriberCount&&(
            <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
            </Typography>
        )} 
        </CardContent>
        </Link>
    </Box>
  )


export default ChannelCard