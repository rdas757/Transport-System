import React from 'react'
import './Book.css';
import Sidebar from './Sidebar';
import { StatusTable } from './StatusTable';
// import {Booking} from './Booking';

export default function Status() {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <StatusTable/>
        </div>
        
    </div>
        
  )
}
