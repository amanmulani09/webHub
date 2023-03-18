import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext'



const Authentication = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
   return user ? children : (
    <Navigate replace to="/signup" state={{from:location}} />
   )
}

export default Authentication