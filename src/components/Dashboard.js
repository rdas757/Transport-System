import React from 'react'
import './Dashboard.css';
import Sidebar from './Sidebar';
import MainDash from './MainDash';

export default function Dashboard() {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <MainDash/>
        </div>
        
    </div>
        
  )
}
