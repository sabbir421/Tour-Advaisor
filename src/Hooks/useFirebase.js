import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import initializationFirebase from "../Components/log-in/Firebase/Firebase.init";

initializationFirebase()
const auth = getAuth();
const useFirebase = () =>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [authError,setAuthError]=useState('')

    // ----------register----------

    const registerUser = (email,password)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
          setAuthError('')
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
      

    }

    // ------------sing in--------------

    const singinUser = (email,password,location,history)=>{

      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError(' ');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));

    }



    // ---------logout--------------

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
          
    }


    // *------------state change ovserver--------------*

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return ()=>unsubscribe;
    },[])

    return{
        user,
        isLoading,
        registerUser,
        authError,
        singinUser,
        logOut,
       
        
    }
}
export default useFirebase;