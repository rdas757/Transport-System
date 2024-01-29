// import React, { useEffect, useState } from 'react'
// import { auth } from "../firebase"
// import { onAuthStateChanged, signOut } from 'firebase/auth';

// const AuthDetails = () => {
//     const [authuser, setAuthUser] = useState(null);

//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setAuthUser(user)
//             }
//             else {
//                 setAuthUser(null);
//             }
//         });
//         return () => {
//             listen();
//         }
//     }, [])

//     const userSignOut = () => {
//         signOut(auth).then(() => {
//             console.log("Signed out successfully")
//         }).catch((error) => {
//             console.log(error)
//         })
//     }

//     return (
//         <div>
//             {authuser ? <p>Signed In</p> : <p>Signed Out</p>}
//         </div>
//     )
// }

// export default AuthDetails
