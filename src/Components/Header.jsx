import moment from "moment";
import logo from "../../src/assets/logo.png"

const Header = () => {
    return (
        <div>
           <div className="flex flex-col justify-center items-center gap-2 py-4 mx-auto">
            <img className="w-[470px]" src={logo} alt="" />
           <h2 className="text-gray-400 ">Journalism Without Fear or Favour</h2>
          <p>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;