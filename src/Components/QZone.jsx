import swimming from "../../src/assets/swimming.png";
import classImage from "../../src/assets/class.png"
import playground from "../../src/assets/playground.png"
import bg from "../../src/assets/bg.png"

const QZone = () => {
    return (
        <div className="w-full bg-slate-100 rounded-lg">
            <h2 className="font-bold">Q-Zone</h2>
            <div>
                <img className="w-full" src={swimming} alt="" />
                <img  className="w-full" src={classImage} alt="" />
                <img  className="w-full" src={playground} alt="" />
            </div>
            <div className="mt-8">
                <img  className="w-full h-fit" src={bg} alt="" />
            </div>
        </div>
    );
};

export default QZone;