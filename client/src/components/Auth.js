import React, { useEffect, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Auth({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <div className="container py-5">
      <center>
      <div>
      <div className="auth-inner">
        {/* <Logo>Reciplease</Logo> */}
        {showLogin ? (
          <>
            <Login onLogin={onLogin} />
            <br />
            <h5 className="forgot-password text-right">
              Don't have an account? &nbsp;
              <button
                className="btn btn-primary"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </h5>
          </>
        ) : (
          <>
            <SignUp onLogin={onLogin} />
            <br />
            <h3>
              Already have an account? &nbsp;
              <button
                className="btn btn-primary"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </h3>
          </>
        )}
      </div>
    </div>
      </center>
    </div>
  );
}

export default Auth;

// background-image: url(../public/images/bg1.jpg); 
