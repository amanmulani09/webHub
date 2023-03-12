import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from '../components/Sidebar';
import {Videos} from './index';
import { fetchFromAPI } from '../utlis/fetchFromAPI';
import LeftNav from '../components/LeftNav';
const Feed = () => {
const [selectedCategory,setSelectedCategory] = useState('Web Development')
const [videos,setVideos] = useState([])

  useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
        setVideos(data.items)
      })
  },[selectedCategory])

  return (
    
    <Stack sx={{flexDirection:{sx: "column",md:"row"}, display:'block'}} >
      <Box sx={{height:{sx:'auto',md:'9vh' }, borderLeft:'1px dotted #FC1503',marginLeft:'210px',width:'90%',borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}, display:'block'}}>
      <Sidebar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />

      </Box>
      <div className='main-container' style={{display:'flex'}}>
      <LeftNav />
      <Box p={2} sx={{overflowY:'auto',  flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color:'white'
        }}>
         {selectedCategory} <span style={{color:'#F31503'}}> Videos</span>

        </Typography>

        <Videos videos={videos}/>

        </Box>
      </div>
  
    </Stack>
  ) 
}

export default Feed