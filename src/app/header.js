'use client';
import React, { useState } from 'react';


const Header = () => {

    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-black text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>About</a></li>
                        <li><a href="/bio">Bio+CV</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Research Publications</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Experience</a></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold">SujayKumar Reddy M</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a href="/bio" >Bio+CV</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Research Publications</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Experience</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
