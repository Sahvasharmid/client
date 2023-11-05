import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { AuthContextProvider } from '../../utils/Authcontext'
import toast from 'react-hot-toast'
const Signin = () => {
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
const [auth,setAuth]=useContext(AuthContextProvider)
    const navigate=useNavigate()
  
    const handleSubmit=async(e)=>{

      e.preventDefault()
    
      
        const data={email,password}
        try{
      const response=  await axios.post("https://backendecomapp.onrender.com/login",data)
     
        if (response.status === 200) {
            console.log('Sign-in successful');
            
setAuth({...auth,user:response.data.loginresult,token:response.data.token})
           localStorage.setItem('auth',JSON.stringify(response.data))
           navigate("/")
           
          }
          
        }
        

        

        catch(err){
            console.log(err)
        }
    }
  return (
    <Layout title={"signin-EcommerceApp"}> 

    <div className='container-fluid bgclr'>
        <div className='container main'>
            <form className='form' onSubmit={handleSubmit}>
        <h3 className='center'>LOGIN</h3>
            
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" class="form-control" id="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">password:</label>
                <input type="password" class="form-control" id="password"  value={password}  onChange={(e)=>setpassword(e.target.value)} required></input>
            </div>
          
         <button type="submit" class="btn btn-primary btnsign">Sign In</button>

         <button type="submit" class="btn btn-primary btnsign" onClick={()=>navigate("/forgotpassword")}>Forgot Password</button>
        </form>
    </div>
    
    </div>
</Layout>
 
  )
}

export default Signin