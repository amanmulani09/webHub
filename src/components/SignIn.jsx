import { useRef, useState } from 'react'

import '../index.css'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../context/authContext'
const SignIn = () => {
  const [passwordVisibility,setPasswordVisibilty] = useState(true)
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null)
  const navigate = useNavigate();
  const {login} = useAuth();

  const guestLogin = 'guest@gmail.com';
  const guestPassword = 'guestPassword@gmail.com'

  const  handleLogin = async(event)=>{
    event.preventDefault();
    let email = loginEmailRef.current.value;
    let password = loginPasswordRef.current.value;
    // console.log('email and pass', email,password)

    try{
      await login(email,password);
      navigate('/feed')
    }
    catch(error){

    }
  }

  const handleGuestLogin= async(event)=>{
    event.preventDefault();

    try{
      await login(guestLogin,guestPassword);
      navigate('/feed')
    }
    catch(error){

    }
  }
 
  return (
    <div  className="signInContainer">
      <div className="signTypography">
      <h2>Bored Enough by watching the unwanted Ads on learning platforms? Try <span style={{color:'red',fontSize:'3.5rem'}}>WebHub!</span>
      
      </h2>
      <span>A free video tutorial learning webApp</span>
      </div>
      <div className="signInFormContainer">
        <h3>Login</h3>
      <form action="" className="signInForm">
      <div className='signInEmail'>
      <label htmlFor='email' name="email">
        Email : 
      </label>
      <input type="email" name="email" ref={loginEmailRef} />
      </div>
     <div className="signinPassword">
     <label htmlFor='password' name="password">
        Password : 
      </label>
      <input type={passwordVisibility ? 'password' : 'text'} name="password" ref={loginPasswordRef} />

     </div>
     <div>

     <label htmlFor='showPassword' name='password'> Show password:</label> 
     <input type="checkbox" name="password" className='password' onChange={()=> setPasswordVisibilty(!passwordVisibility)}/>
     </div>
     <button onClick={(event)=> handleLogin(event)}>Login</button>
     <button style={{
      marginLeft:'35%'
     }} onClick={(event)=> handleGuestLogin(event)}>Guest Login</button>
     <div> 
   <span>Don't have an account? <Link to="/signup" style={{
    color:'#FC1503',
    fontSize:'1.2rem',
    marginLeft:'5px',
    textDecoration:'underline'
   }}> create one </Link></span>

     </div>
      </form>
      </div>
    </div>
  )
}

export default SignIn