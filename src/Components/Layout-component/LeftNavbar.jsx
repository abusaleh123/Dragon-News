import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCategories(data.data.news_category)

        })
    }, [])
    return (
        <div>
           <h2 className="font-semibold mb-4">All category ({categories.length})</h2>
           <div className='flex flex-col  gap-2'>
            {
                categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}> {category.category_name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default LeftNavbar;