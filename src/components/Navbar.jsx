import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utlis/constants"
import {SearchBar} from '../pages/index'
import { useGlobalContext } from "../state/GlobalContext"
import { useState } from "react"
const Navbar = () => {
    const [darkMode,setDarkMode] = useState(false)
    const {state,dispatch} = useGlobalContext();
    // console.log(state)
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: 'sticky',
            background: state.isDarkModeOn ? 'black' : '#fff', top: 0, justifyContent: 'space-between',
           borderBottom:'1px dotted #FC1503'
        }}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
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
        </Stack>
    )
}
export default Navbar