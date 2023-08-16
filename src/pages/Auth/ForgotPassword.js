import Layout from "../../components/Layout/Layout"
import toast from 'react-hot-toast';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { info } from "../../config";


const ForgotPassword = () =>{

    const navigate = useNavigate();
  
 
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${info.url}/api/v1/auth/forgot-password`, {
           
            email,
            newPassword,
            answer
         });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
           
              navigate("/login");
      
            } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };

 
    return(
        <Layout>
         <div className="form-container">
           <h2>ForgotPassword </h2>     
        <form onSubmit={handleSubmit}>
         
        
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your New Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
        </Layout>
    )
}
export default ForgotPassword