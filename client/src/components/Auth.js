import React, { useEffect, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Auth({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80")', backgroundRepeat: "no-repeat"
    }}>
      <div className="container py-5">
      <center>
      <div className = "homepage">
      
      <div className="auth-inner">
        {/* <Logo>Reciplease</Logo> */}
        {showLogin ? (
          <>
            <Login onLogin={onLogin} />
            <br />
            <h6 className="forgot-password text-right">
              Don't have an account? &nbsp;
              <button
                className="btn btn-primary"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </h6>
          </>
        ) : (
          <>
            <SignUp onLogin={onLogin} />
            <br />
            <h6>
              Already have an account? &nbsp;
              <button
                className="btn btn-primary"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </h6>
          </>
        )}
      </div>
    </div>
      </center>
    </div>
    </div>
  );
}

export default Auth;

