import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 justify-center">
            <p className="bg-[#D72050] text-base-100 p-2 rounded-lg text-lg">Latest</p>
           <Marquee pauseOnHover={true} speed={100} className="space-x-2" >
            <Link to={'/news'}> <p>.....Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... .......Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea ipsum delectus reiciendis voluptate recusandae ad, cum cupiditate blanditiis distinctio numquam explicabo molestias qui non magnam dolore et dicta neque.</p></Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;