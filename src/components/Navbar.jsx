import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utlis/constants"
import {SearchBar} from '../pages/index'
import { useGlobalContext } from "../state/GlobalContext"
import { useState } from "react"
const Navbar = () => {
    const [darkMode,setDarkMode] = useState(false)
    const {state,dispatch} = useGlobalContext();
    console.log(state)
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: 'sticky',
            background: state.isDarkModeOn ? 'black' : '#fff', top: 0, justifyContent: 'space-between'
        }}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Home logo" height={45}/>
        </Link>
        <button style={{
            cursor:'pointer',
            position:'absolute',
            right:'36%',
            transition:'all 0.5s ease-in-out',
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
            {state.isDarkModeOn ?<i class="fa-light fa-brightness" style={{
                fontSize:'1.8rem',
                color:'white'
            }}></i> : <i class="fa-solid fa-moon" style={{
                fontSize:'1.8rem',
            }}></i>}
             </button>
        <SearchBar />
        </Stack>
    )
}
export default Navbar