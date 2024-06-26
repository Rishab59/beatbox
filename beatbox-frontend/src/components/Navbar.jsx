import React from "react" ;

import { assets } from "../assets/assets" ;
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate() ;


    return (
        <>
            <div className = "w-full flex justify-between items-center font-semibold">
                <div className = "flex items-center gap-2">
                    <img onClick = { () => navigate(-1) } className = "w-8 bg-black p-2 rounded-2xl cursor-pointer" src = { assets.arrow_left } alt = "arrow_left" />
                    <img onClick = { () => navigate(1) } className = "w-8 bg-black p-2 rounded-2xl cursor-pointer" src = { assets.arrow_right } alt = "arrow_right" />
                </div>

                <div className = "flex items-center gap-4">
                    <p className = "bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer border-2 border-lime-800 hover:bg-gray-100">
                        Switch to root
                    </p>

                    <NavLink to = "https://github.com/Rishab59/beatbox" target = "_blank">
                        <p className = "bg-black px-3 py-1 rounded-2xl text-[15px] border-2 border-white hover:bg-gray-100 hover:text-black cursor-pointer">
                            Source Code
                        </p>
                    </NavLink>

                    <p className = "bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center">
                        R
                    </p>
                </div>
            </div>

            <div className = "flex items-center mt-4 gap-2">
                <p className = "bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className = "bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className = "bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
            </div>
        </>
    ) ;
} ;


export default Navbar ;
