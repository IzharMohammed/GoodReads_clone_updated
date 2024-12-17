import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import BookDescription from "Pages/BookDescription";
import Dashboard from "Pages/Dashboard";
import Error from "Pages/Error";
import Home from "Pages/Home";
import Shelf from "Pages/Shelf";
import React from "react";
import { Route, Routes } from "react-router-dom";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/SignUp" element={<SignUp /> }></Route>
        <Route path="/Description" element={<BookDescription />}></Route>
        <Route path="/shelf" element={<Shelf />} ></Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
