import { useAuth } from "../context/authContext"
import {Box} from '@mui/material'

const UserProfile = () => {
const {logout,user} = useAuth();

const handleLogout = async()=>{
    try{
        await logout()
    }catch(error){
        console.log(error)
    }
}
  return (
    <div style={{
        color:'white'
    }}>
       <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          zIndex:10,
          height:'130px'
        }}

        />
       <span style={{
        color:'white',
        fontSize:'2rem',
        border:'1px solid red',
        marginTop:'-190px',
        padding:'15px',
        borderRadius:'50%',
        backgroundColor:'red',
        marginLeft:'45%',

       }}>
        {user && user.email[0].toUpperCase()}
       </span>
       <span style={{
        border:'1px dotted red',
        marginLeft:'15px',
        padding:'10px',
        cursor:'pointer',
        borderRadius:'5px'
        
       }} onClick={handleLogout}>Logout</span>
{user && <h2 style={{
    textAlign:'center'
}}>Welcome {user.email}</h2>}
      </Box>
    </Box>
    </div>
  )
}

export default UserProfile