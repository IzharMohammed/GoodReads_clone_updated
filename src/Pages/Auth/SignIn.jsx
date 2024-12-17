//React imports
import React, { useState ,  useEffect  } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//component imports
import Layout from "../../Layouts/Layout";
//Redux imports
import { signIn } from "Redux/Slice/AuthSlice";

function SignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

const state = useSelector(state=>state.auth);

useEffect(()=>{
  if(state.isLoggedIn){
    navigate("/Dashboard")
  }
},[])

  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSignInDetails({
      ...signInDetails,
      [name]: value,
    });
  };


function resetForm(){
  setSignInDetails({
    username: "",
    email: "",
    password: "",
  });
}

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(signIn(signInDetails));
    console.log("Response", response);
    if(response?.payload?.data){
      navigate("/");
    }
  resetForm();
  };

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center gap-12 h-[90vh]  ">
      <div className="text-5xl text-white font-semibold">
        <h1>Login to your account</h1>
      </div>

      <div className="flex gap-4 items-center ">
        <span className="text-white text-lg">Do not have an account ?</span>
        <Link to="/SignUp">
          <button className="btn btn-success rounded-lg">Sign up</button>
        </Link>
      </div>
      <div className="w-full">
        <form
          className=" flex flex-col  items-center  gap-8 w-3/4 mx-auto "
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <div className="w-1/3 rounded-lg  ">
            <input
              type="text"
              placeholder="Email ..."
              className="p-4  w-full focus:outline-none"
              autoComplete="off"
              name="email"
              value={signInDetails.email}
              onChange={handleFormChange}
            />
          </div>

          <div className="w-1/3   ">
            <input
              type="text"
              placeholder="Password ..."
              className="p-4  w-full focus:outline-none "
              autoComplete="off"
              name="password"
              value={setSignInDetails.password}
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

export default SignIn;
