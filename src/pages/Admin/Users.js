import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
 import { info } from "../../config";
 import "../../styles/UserStyles.css"


const Users = () => {

  const [users, setUsers] = useState([]);

  //getall products
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${info.url}/api/v1/auth/allUsers`);
      setUsers(data);

    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };
 
  console.log(users)
  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);  
  return (
    <Layout>
        <div className="container-fluid m-3 p-3 ">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
       
         <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">address</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((ele,index)=>{
            return(
               <tr>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.address}</td>
               </tr>
            )
          })}
                </tbody>
              </table>
            </div>
      </div>
      </div>
     
    </Layout>
  );
};
export default Users;
