import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import Home from '../Home'
import Navbar from "../Navbar";
import BookCard from "../Bookcard";
import BookForm from "../BookForm";

import Auth from "../Auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Auth onLogin={setUser} />;
  
  else{
  return (

    <>
      <Navbar user={user} setUser={setUser} />

    <Router>
     
      <div className="App">
        
        <div className = "container">
             
          </div>
          
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/createbooks" element={<BookForm />} />
              <Route exact path="/book/:id" element={<BookCard/>} />

            </Routes>
          </div>
    </Router>
    </>
  )
      }
}
