import { createContext, useContext} from "react";
import {initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase,ref,set} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD4h2d7YQ_wgfE9Kv3qbU2EgwtVRFypn3M",
  authDomain: "second-app-1282e.firebaseapp.com",
  projectId: "second-app-1282e",
  storageBucket: "second-app-1282e.firebasestorage.app",
  messagingSenderId: "51598369022",
  appId: "1:51598369022:web:9df06ae9494316e20205af",
  databaseURL: "https://second-app-1282e-default-rtdb.firebaseio.com/"
};
const firebaseApp= initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext= createContext(null);
const database= getDatabase(firebaseApp);


//custom hook
export const useFirebase=()=>useContext(FirebaseContext)
export const FirebaseProvider = (props)=>{
   const signupuserwithemailandpassword=(email,password)=>{
        createUserWithEmailAndPassword(firebaseAuth,email,password)
     };
     const putData=(key,data)=>set(ref(database,key),data);

    return(
        <FirebaseContext.Provider value={{signupuserwithemailandpassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}