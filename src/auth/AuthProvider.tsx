// import React from "react";
// import { useState } from "react"

// const AuthContext = React.createContext()

// const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     //サインアップ後に認証情報を更新
//     const signup = async (email, password, history) => {
//         try{
//             await auth.createUserWithEmailAndPassword(email, password);
//             auth.onAuthStateChanged(user => setCurrentUser(user));
//             history.push("/");
//         }catch(error){
//             alert(error);
//         }
//     };

// }
