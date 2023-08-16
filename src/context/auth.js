import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

   // Default axios setup.so,we need not to set headers in each axios method
   axios.defaults.headers.common["Authorization"] = auth?.token;

//This function store the values in globle state.so,data not erase while page refresh
  useEffect(()=>{
     const data = localStorage.getItem("auth");
     if(data){
        const parseData = JSON.parse(data);
        setAuth({
            ...auth,
            user:parseData.user,
            token: parseData.token
        })
     }
  },[])
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )

}
// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };