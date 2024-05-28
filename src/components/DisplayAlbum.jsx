import React from "react" ;

import Navbar from "./Navbar" ;
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";


const DisplayAlbum = () => {
    const { id } = useParams() ;
    // console.log(id) ;
    const albumData = albumsData[id] ;
    // console.log(albumData) ;

    return (
        <>
            <Navbar />

            <div className = "mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className = "w-48 rounded" src = { albumData.image } alt = "Album_Title" />

                <div className = "flex flex-col">
                    <p>Playlist</p>

                    <h2 className = "text-5xl font-bold mb-4 md:text-7xl">
                        { albumData.name }
                    </h2>
                    
                    <h4>
                        { albumData.desc }
                    </h4>

                    <div className = "mt-2 flex flex-row">
                        <img className = "inline-block w-7 h-8" src = { assets.beatbox_logo_box } alt = "Beatbox_logo" />
                        <p className = "font-bold pt-1 pl-2 pr-2">Beatbox</p>
                        <p className = "pt-1 pl-1 md:pl-3">&#8226; 50 songs</p>
                        <p className = "pt-1 pl-1 md:pl-3">&#8226; about 2 hrs 30 min</p>
                    </div>
                </div>
            </div>

            <div className = "grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p>
                    <b className = "mr-4">#</b>
                    Title
                </p>
                <p>Album</p>
                <p className = "hidden sm:block">Date Added</p>
                <img className = "m-auto w-4" src = { assets.clock_icon } alt = "clock_icon" />
            </div>

            <hr />

            {
                songsData.map((item, index) => (
                    <div key = { index } className = "grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        <p className = "text-white">
                            <b className = "mr-4 text-[#a7a7a7]">{ index + 1 }</b>
                            <img className = "inline w-10 mr-5" src = { item.image } alt = "Song_Title" />
                            { item.name }
                        </p>

                        <p className = "text-[15px]">
                            { albumData.name }
                        </p>

                        <p className = "text-[15px] hidden sm:block">
                            5 days ago
                        </p>

                        <p className = "text-[15px] text-center">
                            { item.duration }
                        </p>
                    </div>
                ))
            }
        </>
    ) ;
} ;


export default DisplayAlbum ;
