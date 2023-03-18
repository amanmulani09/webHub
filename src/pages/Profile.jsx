import { useAuth } from "../context/authContext"
import { Box } from '@mui/material'
import '../index.css'
import historyPng from '../assets/history.png'
import likedvideosPng from '../assets/liked videos.png'
import playlistPng from '../assets/playlist.png'
import watchlaterPng from '../assets/watchlater.png'
import { Link } from "react-router-dom"
const UserProfile = () => {
    const { logout, user } = useAuth();

    const linksStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{
            color: 'white'
        }}>
            <Box minHeight="95vh">
                <Box>
                    <div style={{
                        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
                        zIndex: 10,
                        height: '130px'
                    }}

                    />
                    <span style={{
                        color: 'white',
                        fontSize: '2rem',
                        border: '1px solid red',
                        marginTop: '-190px',
                        padding: '15px',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        marginLeft: '45%',

                    }}>
                        {user && user.email[0].toUpperCase()}
                    </span>
                    <span style={{
                        border: '1px dotted red',
                        marginLeft: '15px',
                        padding: '10px',
                        cursor: 'pointer',
                        borderRadius: '5px'

                    }} onClick={handleLogout}>Logout</span>
                    {user && <h2 style={{
                        textAlign: 'center'
                    }}>Welcome {user.email}</h2>}



                    <div className="profileNavigator" style={{
                        width: '90%',
                        height: '280px',
                        display: 'flex',
                        marginLeft: '3%',
                        position: 'relative'
                    }}>
                        <Link to="/likedvideos" >
                             <div className="navigatorCard">
                            <span>Liked Videos</span>
                            <img src={likedvideosPng} loading="lazy" />
                            </div>
                        </Link>

                        <Link to="/history" >
                            <div className="navigatorCard">
                                <span>history
                                </span>
                                <img src={historyPng} loading="lazy" />
                            </div>
                        </Link>

                        <Link to="/watchlater" >
                            <div className="navigatorCard">
                                <span>
                                    watch later
                                </span>
                                <img src={watchlaterPng} loading="lazy" />
                            </div>
                        </Link>

                        <Link to="playlist" style={linksStyle}>
                            <div className="navigatorCard">
                                <span>
                                    playlists
                                </span>
                                <img src={playlistPng} loading="lazy" />
                            </div>
                        </Link>
                    </div>

                </Box>
            </Box>
        </div>
    )
}

export default UserProfile