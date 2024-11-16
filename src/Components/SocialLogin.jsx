
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="">
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="w-full flex flex-col space-y-4">
                <button className="btn"> <FaGoogle /> Login With Google</button>
                <button className="btn"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;