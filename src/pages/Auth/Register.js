import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "../../config";
import axios from "axios";
import "../../styles/AuthStyles.css";

const Register =()=>{

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [role,setRole] = useState("")
    
    console.log(role)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(role)
        try {
          const res = await axios.post(`${info.url}/api/v1/auth/register`, {
            name,
            email,
            password,
            phone,
            address,
            answer,
            role
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            console.log("datas",res.data.user)
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
           <h2>Register Page</h2>     
        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
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
          <div className="mb-3">
          
          <select class="form-select" aria-label="Default select example" 
           value={role}
           onChange={e => {
            console.log(e.target.value);
            setRole(e.target.value)}}
          >
           <option></option>
            <option value="1">Admin</option>
            <option value="0">user</option>
            
          </select>
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
        </Layout>
    )
}
export default Register;