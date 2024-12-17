//React imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//Redux imports
import { logout } from "Redux/Slice/AuthSlice";

function Navbar() {

const dispatch = useDispatch();
const navigate = useNavigate()

const state = useSelector(state=>state.auth);

  function handleLogout(){
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
      <div className="flex justify-between  m-4 p-8 bg-slate-900  h-[90px]">
      <Link to='/Dashboard'><div className="btn btn-success text-white text-xl ">BookShelf</div></Link>
        <div className="flex gap-12 text-white ">
          <div><Link to='/shelf'>Shelf</Link></div>
          {
         state.isLoggedIn &&    <div>{state.username}</div>
          }
          <ul>
            <details>
              <summary className="mb-2">options</summary>
             {
              state.isLoggedIn &&    <li className="cursor-pointer btn btn-error" onClick={handleLogout}> Logout</li>
             }
             {
              !state.isLoggedIn &&
              <li className="btn btn-success"> <Link to="/SignUp">Sign up</Link> </li>
             }
              {
              !state.isLoggedIn &&
              <li className="btn btn-success"><Link to="/SignIn">sign in</Link></li>
             }
  
            </details>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
