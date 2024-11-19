import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {loginUser, setUser} = useContext(AuthContext);
  const [error, setError] = useState([]);
  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location);
  const handleSubmit = e => {
    e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;

   loginUser(email, password)
   .then(result => {
    const user = result.user;
    setUser(user);
    navigate(location?.state ? location.state : "/")
   })
   .catch(err => {
    setError({...error, login: err.code})
   })
  }
    return (
        <div className="hero bg-base-200 min-h-screen ">
           
        <div className="hero-content flex-col lg:flex-row-reverse ">
       
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl py-8">
            <form onSubmit={handleSubmit} className="card-body w-96">
            <div>
            <h1 className="text-2xl font-semibold">Login Your Account</h1>
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
                {
                  error.login && (
                    <label className='label text-red-500'>
                     { error.login}
                    </label>
                  )
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
            </form>
            <p className="text-center">don't have  a account? <Link className='text-red-400' to={"/auth/register"}>Register </Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;