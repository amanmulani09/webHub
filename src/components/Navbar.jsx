import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utlis/constants"
import {SearchBar} from '../pages/index'
import { useGlobalContext } from "../context/GlobalContext"
import { useState } from "react"
import { useAuth } from "../context/authContext"
const Navbar = () => {
    const [darkMode,setDarkMode] = useState(false)
    const {state,dispatch} = useGlobalContext();
    const {user} = useAuth();
    const userName = user?.email;
    console.log(userName)
    // console.log(state)
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: 'sticky',
            background: state.isDarkModeOn ? 'black' : '#fff', top: 0, justifyContent: 'space-between',
           borderBottom:'1px dotted #FC1503'
        }}>
        <Link to="/feed" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Home Play Logo" height={45}/>
        </Link>
        <button style={{
            cursor:'pointer',
            position:'absolute',
            right:'36%',
            transition:'all 0.4s ease-in-out',
            border:'none',
            background:'none'
        }} 
        onClick={()=>{
            setDarkMode(!darkMode)
            dispatch({
                type:'CHANGE_THEME',
                payload:darkMode
            })
        }
        } 
        >
        
             </button>
        <SearchBar />

        {
            userName && 
            <button style={{
                border:'1px dotted white',
                color:'#FC1503',
                position:'absolute',
                right:'1%',
                background:'none',
                borderRadius:'50%',
                fontSize:'1.5rem'
            }}> <Link to="/profile" style={{
                color:'#FC1503',
                textDecoration:'none'
            }}>{ userName[0].toUpperCase()}</Link></button>
        }
 
        </Stack>
    )
}
export default Navbar