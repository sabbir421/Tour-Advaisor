import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializationFirebase from "../Components/log-in/Firebase/Firebase.init";



initializationFirebase()

const provider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () =>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [authError,setAuthError]=useState('')
    const [admin, setAdmin] = useState(false);
    const [superAdmin,setSuperAdmin]=useState(false);

    


    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              saveUser(email,name,'POST')
              // send name to firebase after creation
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
          })
          .catch((error) => {
              setAuthError(error.message);
              console.log(error);
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

  


  setIsLoading(true);
  signInWithPopup(auth, provider)
      .then((result) => {
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
          const destination = location?.state?.from || '/';
          history.replace(destination);
      }).catch((error) => {
          setAuthError(error.message);
      }).finally(() => setIsLoading(false));

    }


    // user save in database

    const saveUser=(email,displayName,method)=>{

      const user = { email, displayName, };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

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

    useEffect(() => {
      fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user.email])
  //super Admin
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => {
            console.log(data.superAdmin);
            setSuperAdmin(data.superAdmin)})
          
  }, [user.email])
 


    return{
        user,
      
        isLoading,
        registerUser,
        authError,
        singinUser,
        logOut,
        singinWithGoogle,
        admin,
        superAdmin,
       
        
    }
   
}
export default useFirebase;