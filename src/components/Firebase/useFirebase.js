import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "./firebase.init"

app();
const useFirebase = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
        })
    }, [])

    const sigInOut = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.massage)
        });
    }

    return {
        googleSignIn,
        user,
        setUser,
        error,
        setError,
        sigInOut
    }

}
export default useFirebase;