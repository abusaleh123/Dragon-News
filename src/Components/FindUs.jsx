import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div >
           <h2 className="font-semibold mb-3">Find Us On</h2>
           <div className="join join-vertical w-full space-y-2">
  <button className="btn join-item  border justify-start"> <FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item border justify-start"><FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item border justify-start"><FaInstagram></FaInstagram> Instagram</button>
</div>
        </div>
    );
}; 

export default FindUs;