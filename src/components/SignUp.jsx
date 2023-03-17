import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const SignUp = () => {
 
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
      <input type="email" name="email" />
      </div>
     <div className="signUpPassword">
     <label htmlFor='password' name="password">
        Password : 
      </label>
      <input type="email" name="password" />

     </div>
     <button
     style={{
       marginLeft:'38%'
      }}>create account</button>
      <button>Guest Login</button>
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