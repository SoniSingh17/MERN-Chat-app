import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setinputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading , signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <p className="text-center text-sm">Chat App</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setinputs({ ...inputs, fullName: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              value={inputs.username}
              onChange={(e) =>
                setinputs({ ...inputs, username: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setinputs({ ...inputs, confirmPassword: e.target.value })
              }
            />

            <select
              className="select select-bordered w-full"
              value={inputs.gender}
              onChange={(e) =>
                setinputs({
                  ...inputs,
                  gender: e.target.value,
                })
              }
            >
              <option disabled>Select Gender</option>
              <option>male</option>
              <option>female</option>
            </select>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
