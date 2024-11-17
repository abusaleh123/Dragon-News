import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const {data : news} = useLoaderData();
    console.log(news);
    return (
        <div>
           <h2 className="font-semibold">Dragon News Home</h2>
           <p className="text-gray-400">{news.length}  News Found in this category</p>
           <div>
            {
                news.map(singleNews => <NewsCard key={news._id } singleNews={singleNews}></NewsCard> )
            }
           </div>
        </div>
    );
};

export default CategoryNews;