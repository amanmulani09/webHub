import '../index.css'
import {Link} from 'react-router-dom'
const SignIn = () => {
 
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
      <input type="email" name="email" />
      </div>
     <div className="signinPassword">
     <label htmlFor='password' name="password">
        Password : 
      </label>
      <input type="email" name="password" />

     </div>
     <button>Login</button>
     <button style={{
      marginLeft:'35%'
     }}>Guest Login</button>
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