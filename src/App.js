import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail } from './pages';
import { useGlobalContext } from './state/GlobalContext';
import LikedVideos from './pages/LikedVideos';
import WatchLater from './pages/WatchLater';
import WatchHistory from './pages/WatchHistory'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
const App = () => {
  const {state} = useGlobalContext();
  const darkmode = state.isDarkModeOn;

  return (
    <BrowserRouter>
  <Box sx={{  backgroundColor: darkmode ?  'black' : 'white'}}>
    <Navbar />
<Routes>
  <Route path="/" exact element={<SignIn />} />
  <Route path="/signin" exact element={<SignIn />} />
  <Route path="/signup" exact element={<SignUp />} />
  <Route path="/feed" exact element={<Feed />} />
  <Route path="/video/:id" element={<VideoDetail />} />
  <Route path="/channel/:id" element={<ChannelDetail />} />
  <Route path="/search/:searchTerm" element={<SearchFeed />} />
  <Route path="/likedvideos" element={<LikedVideos />} />
  <Route path="/watchlater" element={<WatchLater />} />
  <Route path="/history" element={<WatchHistory />} />
</Routes>
  </Box>
    </BrowserRouter>
  )
}

export default App