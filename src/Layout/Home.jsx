import { useState } from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout-component/LeftNavbar";
import RightNavbar from "../Components/Layout-component/RightNavbar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";



const Home = () => {
  
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto py-2 bg-slate-300  rounded-lg px-8">
                    <LatestNews></LatestNews>
                </section>
             
            </header>
            <nav className="w-11/12 mx-auto py-4">
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
<aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
<section className = "col-span-6 ">
<Outlet >

</Outlet>
</section>
<aside className="col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default Home;