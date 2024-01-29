import React, { useEffect, useState } from 'react'
import './MainDash.css'
import Cards from './Cards'
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

const bookRef = collection(db, "mybooking");

const MainDash = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const querySnapshort = await getDocs(bookRef);
        const allTrucks = querySnapshort.docs.map((doc) => doc.data());
        setTrucks(allTrucks);
      } catch (error) {
        console.error("Error getting data");
      }
    };
    fetchTrucks();
  }, []);

  return (
    <div className="MainDash">
      <div className="Heading">
        Dashboard
      </div>
      <div className='Cardsection'>
        <Cards />
      </div>
      <div className="Footer">
        {/* <img className="IMG1" src={truck} alt="" /> */}
        <br />
        My Bookings
        <br />
        <table className='bookingtable'>
          <thead>
            <tr>
              <th>Source</th>
              <th>Destination</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((doc) => {
              return (
                <tr key={doc.id}>
                  <td>{doc.source}</td>
                  <td>{doc.destination}</td>
                  <td>{doc.type}</td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
      {/* <h2>Welcome to T-Haul</h2>
        <h4>Your moving and storaging resource service</h4> */}
    </div>
  )
}

export default MainDash
