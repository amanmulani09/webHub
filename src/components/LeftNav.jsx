import { display } from '@mui/system'
import React from 'react'

const leftNavStyle = {
border:'2px solid white',
width:'200px',
height:'300px'
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
                }}>Liked Videos 👍</span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}>Liked Videos 👍</span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}>Liked Videos 👍</span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}>Liked Videos 👍</span>
            </button>
    </div>
  )
}

export default LeftNav