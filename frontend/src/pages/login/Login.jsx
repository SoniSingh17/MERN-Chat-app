import React , {useState} from 'react'
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin';


const Login = () => {
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
  const {loading , login } = useLogin()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    await login(username , password)

  }

  return (
    
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <p className="text-center text-sm">Chat App</p>
           <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            value = {username}
            onChange={(e)=> setusername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
          />

          <button type='submit' className="btn btn-primary w-full"
          disabled = {loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
          </button>
          </form>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
   
  
}

export default Login