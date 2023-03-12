import { Link } from 'react-router-dom'
import React from 'react'
const leftNavStyle = {
    /* border: 2px solid white; */
    width: "200px",
    height: '300px',
    boxShadow: "-1px 0px 4px 0px #FC1503",
    marginTop:'30px',
    marginLeft:'10px'
}
const LeftNav = () => {
  return (
    <div style={leftNavStyle} >
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.7'
                }}>Watch Later ⏲️</span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}> <Link to="/likedvideos">Liked Videos 👍</Link> </span>
            </button>
        {/* <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}></span>
            </button> */}
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}>Playlists 🖆 </span>
            </button>
    </div>
  )
}

export default LeftNav