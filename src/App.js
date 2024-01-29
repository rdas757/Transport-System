import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";


import { Login } from "./components/Login";
import { Register } from "./components/Register";

import Dashboard from './components/Dashboard';
import { Booking } from "./components/Booking";
import Book from './components/Book';
import Status from './components/Status';


// import Home from "./components/Home";
// import Home2 from './components/Home2';
// import Home3 from './components/Home3';




function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    // <div className="App">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
    // </div>
    //   // <>
      // <Dashboard/>
        // <Book/>

    // {/* </> */ }



    
    <div>
    {/* //   <h1>Basic Example</h1> */}
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Book" element={<Book/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Status" element={<Status/>}/>
          {/* <Navigate to="/"/> */}
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
