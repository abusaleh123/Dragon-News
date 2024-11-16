import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../src/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav space-x-4">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
                <NavLink to={"/about"}>About</NavLink>
               
            </div>
            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <button className="py-2 btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;