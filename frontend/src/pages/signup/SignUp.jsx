import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <p className="text-center text-sm">Chat App</p>

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />

          <select className="select select-bordered w-full">
            <option disabled selected>
              Select Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <button className="btn btn-primary w-full">
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
   
  
}

export default SignUp