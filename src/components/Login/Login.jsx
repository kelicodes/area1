import "./Login.css"
import { useState, useContext ,useEffect} from 'react'
import {shopcontext} from "../../context/Shopcontext"
import useNaviage from 'react-router-dom'
import axios from "axios"
import { toast } from "react-toastify"
import.meta.env.VITE_API_URL




export default function Login(){
	const [logstate,setLogstate]=useState("login")
	const [loginType, setLoginType] = useState("user")
const [name,setName]=useState('')
const [email,setEmail]=useState('')	
const [password,setPassword]=useState('')
const {setToken}=useContext(shopcontext)

const navigate=useNavigate()

const submithandler = async (e) => {

  e.preventDefault();
  try {
    let endpoint = "";
    let payload = { email, password };

    if (loginType === "user") {
      if (logstate === "signup") {
        endpoint = "/user/register";
        payload = { name, email, password };
      } else {
        endpoint = "/user/login";
      }
    } else if (loginType === "admin") {
      endpoint = "/user/adminlogin";
    }

    const response = await axios.post("https://areaone-4.onrender.com"+ endpoint, payload);
     console.log(response);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role); 
      toast.success("Login successful");

      if (response.data.role === "admin") {
        navigate("/admin") 
      } else {
        navigate("/");
      }
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};


useEffect(()=>{
  window.scrollTo(0,0)
},[])



	return (
  <form onSubmit={submithandler} className="login">
   
  <div className="login-type">
  <label>
    <input
      type="radio"
      value="user"
      checked={loginType === "user"}
      onChange={() => setLoginType("user")}
    />{" "}
    User
  </label>
  <label>
    <input
      type="radio"
      value="admin"
      checked={loginType === "admin"}
      onChange={() => setLoginType("admin")}
    />{" "}
    Admin
  </label>
</div>


    {logstate === "signup" && (
      <div className="name">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
    )}

    <input
      type="text"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      placeholder="Enter email address"
    />
    <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="Enter password"
    />

    {logstate === "signup" ? (
      <p>
        Already have an account?{" "}
        <span onClick={() => setLogstate("login")}>Log in</span>
      </p>
    ) : (
      <p>
        Don’t have an account?{" "}
        <span onClick={() => setLogstate("signup")}>Sign up</span>
      </p>
    )}

    <button type="submit" className="btn">
      SUBMIT
    </button>
  </form>
)

}
