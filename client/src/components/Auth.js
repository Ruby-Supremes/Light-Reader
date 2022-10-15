import React,{useEffect, useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    
    <div className='auth-wrapper'>
      <div className='auth-inner'>
    {/* <Logo>Reciplease</Logo> */}
    {showLogin ? (
      <>
        <Login onLogin={onLogin} />
        <br />
        <p className="forgot-password text-right">
          Don't have an account? &nbsp;
          <button color="secondary" onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </p>
      </>
    ) : (
      <>
        <SignUp onLogin={onLogin} />
        <br />
        <p>
          Already have an account? &nbsp;
          <button color="secondary" onClick={() => setShowLogin(true)}>
            Log In
          </button>
        </p>
      </>
    )}
    </div>
  </div>
  )
}

export default Auth