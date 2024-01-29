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
class truckservice {
    getAvailability=()=> {
        return getDocs(truckCollectionRef);
    }

    
}


export default new truckservice();

