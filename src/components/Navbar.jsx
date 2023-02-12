import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utlis/constants"
import {SearchBar} from '../pages/index'
const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: 'sticky',
            background: '#000', top: 0, justifyContent: 'space-between'
        }}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="Home logo" height={45}/>
        </Link>
        <SearchBar />
        </Stack>
    )
}
export default Navbar