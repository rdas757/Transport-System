import React, { useState, useRef, useEffect } from 'react'
import './Booking.css'
import { useNavigate } from 'react-router-dom';
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
    where,
    QuerySnapshot
} from "firebase/firestore"

const truckCollectionRef = collection(db, "trucks");
const bookRef = collection(db, "mybooking");

export const Booking = (props) => {

    const [source, setSource] = useState('');
    const [destination, setDest] = useState('');
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setDate(e.target.value);
    }
    const srcChange = (e) => {
        setSource(e.target.value);
    }
    const dstChange = (e) => {
        setDest(e.target.value);
    }

    const [showTable, setShowTable] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const q = query(truckCollectionRef,
            where("source", "==", source),
            where("destination", "==", destination),
            where("available", "==", "yes"))
        getDocs(q)
        .then((QuerySnapshot) => {
            const matchingTrucks = [];
            QuerySnapshot.forEach((doc) => {
                matchingTrucks.push(doc.data());
            });
            setSearchResults(matchingTrucks);
        })
        .catch((error) => {
            console.log('Error getting documents: ', error);
        });
        setShowTable(!showTable);
    }

    const navigate = useNavigate();
    const booknow = async(e) => {
        e.preventDefault();
        try {
            await addDoc(bookRef, {
                source: source,
                destination: destination,
                type: "A"
            });
            console.log('New booking done ');
            setSource('');
            setDest('');
            } catch (error) {
            console.error('Error booking ', error);
            }


        navigate("/Dashboard");
    }


    return (
        <div className="auth-form-container">
            <h2>Booking</h2>
            <form className="Booking-form" onSubmit={handleSubmit}>
                <label htmlFor="source">Source</label>
                <input value={source} onChange={srcChange} type="search" placeholder="source" id="source" name="source" />
                <label htmlFor="destination">Destination</label>
                <input value={destination} onChange={dstChange} type="search" placeholder="destination" id="destination" name="destination" />
                <label htmlFor="date">Pickup Date</label>
                <input value={date} type="date" onChange={handleChange} ref={dateInputRef} />
                <button type="submit">Submit</button>

            </form>
            <br />
            <h3>Status Table</h3>
            {showTable && (
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
                        {searchResults.map((doc) => {
                            return(
                                <tr key={doc.id}>
                                    <td>{doc.source}</td>
                                    <td>{doc.destination}</td>
                                    <td>{doc.type}</td>
                                    <td>{doc.available}</td>
                                    <td>
                                        <button onClick={booknow} variant="secondary"className='bookbutton'>Book Now</button>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            )

            }
        </div>

    )
}

