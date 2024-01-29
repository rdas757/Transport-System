import React, { useState, useRef, useEffect } from 'react'
import './Booking.css';
// import truckCollectionRef from '../services/truckservice';
// import {source,} from './Booking';
import { Entry } from './Booking';
import { db } from "../firebase"

import { 
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where
} from "firebase/firestore"


const truckCollectionRef = collection(db, "trucks");

const q = query(truckCollectionRef, where("source", "==", "Bhubaneswar"), where("destination", "==", "Rourkela"))

// const users = await getDocs(q)

export const StatusTable = (props) => {
    
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        getTrucks();
    }, [])


    const getTrucks = async() => {
        const data = await getDocs(q);
        console.log(data.docs);
        setTrucks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    };
    
    return (
        <div className="auth-form-container">
            <h2>Status Table</h2>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Type</th>
                        <th>Availability</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trucks.map((doc, index) => {
                        return(
                            <tr key={doc.id}>
                                <td>{doc.source}</td>
                                <td>{doc.destination}</td>
                                <td>{doc.type}</td>
                                <td>{doc.available}</td>
                                <td>
                                    <button  variant="secondary"className='bookbutton'>Book Now</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
                
            </table>
        </div>
    )
}