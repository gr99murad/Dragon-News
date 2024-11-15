import React from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"



const Navbar = () => {


    const links = (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/about">About</NavLink>
       
          
        </>
      );
    
  return (
    <div className="flex justify-between">
      <div className="">

      </div>
      <div className="nav space-x-5">
          {links}
      </div>
      <div className="flex gap-5">
        <img src={userIcon} alt="" />
        <button className="btn btn-neutral rounded-none">Login</button>

      </div>
    </div>
  );
};

export default Navbar;
