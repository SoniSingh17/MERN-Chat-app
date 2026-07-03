import React from 'react'

const Login = () => {
  return (
    
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <p className="text-center text-sm">Chat App</p>

          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full">
            Login
          </button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
   
  
}

export default Login