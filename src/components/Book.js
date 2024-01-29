import React from 'react'
import './Book.css';
import Sidebar from './Sidebar';
import {Booking} from './Booking';

export default function Book() {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <Booking/>
        </div>
        
    </div>
        
  )
}
