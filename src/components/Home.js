import React from 'react'
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/home2">Home2</Link>
      </li>
      <li>
        <Link to="/home3">Home3</Link>
      </li>
    </div>
  )
}

export default Home
