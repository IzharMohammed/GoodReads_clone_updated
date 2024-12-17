//React imports
import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//Component imports
import Layout from "../../Layouts/Layout";
//Redux imports
import { signUp } from "Redux/Slice/AuthSlice";

function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

const state = useSelector(state=>state.auth);

useEffect(()=>{
  if(state.isLoggedIn){
    navigate("/Dashboard")
  }
},[])

  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  };


  function resetForm() {
    setSignUpDetails({
      username: "",
      email: "",
      password: "",
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(signUp(signUpDetails));
    console.log("Response", response);
    navigate("/SignIn");
    resetForm();
  };

  return (
    <Layout>
    <div>
      <div className="flex flex-col items-center justify-center gap-12 h-[100vh] ">
        <div className="text-5xl text-white font-semibold">
          <h1>Sign UP</h1>
        </div>

        <div className="flex gap-4 items-center ">
          <span className="text-white text-lg">Already have an account ?</span>
          <Link to="/SignIn">
            <button className="btn btn-success rounded-lg">Sign in</button>
          </Link>
        </div>

        <form
          className=" flex flex-col  items-center  gap-8 w-3/4 "
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <div className="w-1/3 rounded-lg  ">
            <input
              type="text"
              placeholder="Username ..."
              className="p-4  w-full focus:outline-none text-white"
              autoComplete="off"
              name="username"
              value={signUpDetails.username}
              onChange={handleFormChange}
            />
          </div>

          <div className="w-1/3 rounded-lg  ">
            <input
              type="text"
              placeholder="Email ..."
              className="p-4  w-full focus:outline-none text-white"
              autoComplete="off"
              name="email"
              value={signUpDetails.email}
              onChange={handleFormChange}
            />
          </div>

          <div className="w-1/3   ">
            <input
              type="text"
              placeholder="Password ..."
              className="p-4  w-full focus:outline-none text-white"
              autoComplete="off"
              name="password"
              value={signUpDetails.password}
              onChange={handleFormChange}
            />
          </div>

          <div className="w-1/3">
            <button className="btn btn-primary rounded-lg w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default SignUp;
