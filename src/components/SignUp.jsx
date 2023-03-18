import React,{useState,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../index.css'
import { useAuth } from '../context/authContext'
const SignUp = () => {
  const [passwordVisibility,setPasswordVisibilty] = useState(true)
  const signUpEmailRef = useRef(null);
  const signUpPasswordRef = useRef(null)
  const {createUser,login} = useAuth();
  const navigate = useNavigate();
  const guestLogin = 'guest@gmail.com';
  const guestPassword = 'guestPassword@gmail.com'
  const  handleSignUp =  async(event)=> {
    event.preventDefault();
    let email = signUpEmailRef.current.value;
    let password = signUpPasswordRef.current.value;
    try{
      await createUser(email,password)
      navigate('/feed')

    }catch(error){
        console.log(error)
    }
    // console.log('email and pass', email,password)
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
    <div  className="signUpContainer">
      <div className="signTypography">
      <h2>Bored Enough by watching  the unwanted Ads on learning platforms? Try <span style={{color:'red',fontSize:'3.5rem'}}>WebHub!</span>
      
      </h2>
      <span>A free video tutorial learning webApp</span>
      </div>
      <div className="signUpFormContainer">
        <h3>Create Account</h3>
      <form action="" className="signUpForm">
      <div className='signUpEmail'>
      <label htmlFor='email' name="email">
        Email : 
      </label>
      <input type="email" name="email" ref={signUpEmailRef} />
      </div>
     <div className="signUpPassword">
     <label htmlFor='password' name="password" >
        Password : 
      </label>
      <input type={passwordVisibility ? 'password': 'text'} name="password" ref={signUpPasswordRef} />


     </div>
     <div>

<label htmlFor='showPassword' name='password'> Show password:</label> 
<input  type="checkbox" name="password" className='password' onChange={()=> setPasswordVisibilty(!passwordVisibility)}/>
</div>
     <button
     style={{
       marginLeft:'38%'
      }} onClick={(event)=> handleSignUp(event)}>create account</button>
      <button onClick={(event)=> handleGuestLogin(event)}>Guest Login</button>
     <div>

     <span>Already have an account ?  <Link to="/signin" style={{
       color:'#FC1503',
       fontSize:'1.2rem',
       marginLeft:'5px',
       textDecoration:'underline'
      }}> Login </Link></span>
      </div>
      </form>
      </div>
    </div>
  )
}

export default SignUp