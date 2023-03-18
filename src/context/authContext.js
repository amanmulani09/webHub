import { useContext, createContext,useEffect,useState } from "react";
import { auth } from "../utlis/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const authcontext = createContext(null);
const AuthcontextProvider = ({ children }) => {
    const [user,setUser] = useState('')

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return (
    <authcontext.Provider value={{
        createUser,
        login,
        logout,
        user
    }}>
        {children}
    </authcontext.Provider>
    )
}

function useAuth() {
    return useContext(authcontext)
}

export { AuthcontextProvider, useAuth }
