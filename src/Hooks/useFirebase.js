import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializationFirebase from "../Components/log-in/Firebase/Firebase.init";

initializationFirebase()

const provider = new GoogleAuthProvider();
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

    // Google SingIn

   const singinWithGoogle=(location,history)=>{

    signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


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
        singinWithGoogle,
       
        
    }
}
export default useFirebase;