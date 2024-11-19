import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
const {createNewUser,  setUser, updateUserProfile} = useContext(AuthContext);
const [error,setError] = useState({});
const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if(name.length < 5) {
      setError({...error, name: "Must be more the 5 character"});
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
   
    // console.log({name, photo, email, password});

    createNewUser(email, password)
    .then((result) => {
        const user = result.user;
        setUser(user)
        updateUserProfile({displayName: name, photoURL : photo})
        .then(() => {
          navigate("/")
        })
        .catch(error => console.log(error))
    })
    .catch(error => {
        console.log("Error" , error.message);
    })



}


    return (
        <div className="hero bg-base-200 min-h-screen ">
           
        <div className="hero-content flex-col lg:flex-row-reverse ">
       
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl py-8">
            <form onSubmit={handleSubmit} className="card-body w-96">
            <div>
            <h1 className="text-2xl font-semibold">Register Your Account</h1>
        </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
              </div>
              {
                error.name && (
                  <label className="label text-red-500">
                  {error.name}
                </label>
                )
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="text-center">Already have an account? <Link className='text-red-400' to={"/auth/login"}>Login </Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;