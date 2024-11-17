import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({singleNews}) => {
    const {
        title,
        author,
        published_date,
        thumbnail_url,
        rating,
        total_view,
        details,
        _id
      } = singleNews;
    return (
        <div className=" w-full mb-4 mt-6 bg-white border rounded-lg shadow-lg overflow-hidden">
        {/* Author Section */}
        <div className="flex items-center p-4">
          <img
            src={author.img || "https://via.placeholder.com/40"}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h5 className="font-bold text-gray-700">{author.name || "Unknown"}</h5>
            <p className="text-gray-500 text-sm">
              {new Date(published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
  
        {/* Title & Thumbnail */}
        <h3 className="font-bold text-lg text-gray-800 px-4">{title}</h3>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full  h-96 object-cover top mt-4"
        />
  
        {/* Details */}
        <p className="text-gray-600 text-sm px-4 py-4">
          {details.slice(0, 120)}...
          <Link to={`/news/${_id}`} className="text-blue-500 font-semibold cursor-pointer">
            Read More
          </Link>
        </p>
  
        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <div className="flex items-center">
            <span className="text-orange-500 mr-1">★ ★ ★ ★ ★</span>
            <p className="text-sm text-gray-700 ml-2">{rating.number}</p>
          </div>
          <p className="text-gray-600 text-sm flex items-center">
            👁 {total_view}
          </p>
        </div>
      </div>
    );
};

export default NewsCard;