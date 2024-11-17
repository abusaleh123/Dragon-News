import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../src/assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div>
              <h1 className="text-lg font-bold">{user && user.email}</h1>
            </div>
            <div className="nav space-x-4">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
                <NavLink to={"/about"}>About</NavLink>
               
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? ( 
                       <button onClick={logOut} className="py-2 btn btn-neutral rounded-none">Log Out</button>

                     ): ( <Link to={"/auth/login"} className="py-2 btn btn-neutral rounded-none">Login</Link>)
                }
               
               
            </div>
        </div>
    );
};

export default Navbar;