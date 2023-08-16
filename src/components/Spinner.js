
import React,{useEffect,useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = ({path="login"}) => {

    const [count ,setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{

        const interval = setInterval(()=>{
            setCount((prevValue) => --prevValue);
        },1000)
        
        count === 0 && navigate(`/${path}`,{
            state: location.pathname     
  //this location hook is used to read the current Url path.
  //bcz,when customer try to go that particular page with out login,then we redirect to login page.after customer login,then we redirect to which page customer tried to go
       
})

         return()=> clearInterval(interval)

    },[count,navigate,location,path])

    return(
        <>

<div class="d-flex flex-column justify-content-center align-items-center"
 style={{height:"100vh"}}
>
    <h1 className="Text-center">redirecting to you in {count} second</h1>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        </>
    )
}
export default Spinner;