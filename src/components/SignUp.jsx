import React from 'react'
import '../index.css'
const SignUp = () => {
 
  return (
    <div  className="signInContainer">
      <div className="signTypography">
      <h2>Bored Enough by seeing the unwanted Ads on learning platforms? Try <span style={{color:'red',fontSize:'3.5rem'}}>WebHub!</span>
      
      </h2>
      <span>A free video tutorial learning webApp</span>
      </div>
      <div className="signInFormContainer">
        <h3>Login:</h3>
      <form action="" className="signInForm">
      <div className='signInEmail'>
      <label htmlFor='email' name="email">
        Email : 
      </label>
      <input type="email" name="email" />
      </div>
     <div className="signinPassword">
     <label htmlFor='password' name="password">
        Password : 
      </label>
      <input type="email" name="password" />

     </div>
     <button>Guest Login</button>
     <button>Login</button>
   
      </form>
      </div>
    </div>
  )
}

export default SignUp