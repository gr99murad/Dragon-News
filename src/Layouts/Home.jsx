import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LayoutComponent/LeftNavbar';
import RightNavbar from '../Components/LayoutComponent/RightNavbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
                </section>
                
            </header>
            <nav>
            <section className='w-11/12 mx-auto py-4 '>
                <Navbar></Navbar>
                </section>
            </nav>
            <main className='w-11/12 mx-auto py-4 grid md:grid-cols-12 gap-3'>
            <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
            <section className='col-span-6'>
                <h2>Dragon News Home</h2>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            
            </main>
        </div>
    );
};

export default Home;