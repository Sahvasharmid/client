import React, { useState } from 'react'
import toast from "react-hot-toast";
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
    const[username,setUsername]=useState("")//same name as the backend
    const[phoneno,setPhn]=useState("")
    const[address,setAddress]=useState("")
    const[email,setEmail]=useState("")
   const[password,setpassword]=useState("")
   const[answer,setanswer]=useState("")
   const navigate=useNavigate()
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("https://backendecomapp.onrender.com/register", { username, email, phoneno,password, address ,answer});
        console.log("Response:", response);
        setUsername("");
        setEmail("");
        setPhn("");
        setpassword("");
        setAddress("");
        setanswer("")
        if(response&&response.data.success){
            toast.success(response.data && response.data.message);

           
            console.log(response.data.Userobj)
        }
        else {
            toast.error(response.data.message);
          }
        

      } catch (error) {
        console.log("Error during signup:", error);
   
      }
      
  };
  return (
    
   <>
<Layout title={"signup-EcommerceApp"}>
   <div className='container-fluid bgclr'>
    
   <div className='container main' >
  

    <form onSubmit={handleSubmit}  className='form'>
        <h3 className='center'>Sign Up</h3>
        <p className='center'>Already a member? <Link to="/login">login</Link></p>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" class="form-control" id="name"  value={username}   onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" class="form-control" id="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">password:</label>
                <input type="password" class="form-control" id="password"  value={password}  onChange={(e)=>setpassword(e.target.value)} required></input>
            </div>
        
               
            <div className="form-group">
                <label htmlFor="phn">Mobile no:</label>
                <input type="text" class="form-control" id="phn"  value={phoneno} onChange={(e)=>setPhn(e.target.value)} required></input>
            </div>
               
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" class="form-control" id="address"  value={address} onChange={(e)=>setAddress(e.target.value)} required></input>
            </div>
            <div className="form-group">
                <label htmlFor="answer">Your favorite sport:</label>
                <input type="text" class="form-control" id="answer"  value={answer} onChange={(e)=>setanswer(e.target.value)} required></input>
            </div>
          
         <button type="submit" className="btn btn-primary btn-sign w-100 mt-2">Sign Up</button>

        </form>
     
</div>          
</div>

</Layout>
   </>
  )
}

export default Signup