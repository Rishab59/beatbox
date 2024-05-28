import React from "react" ;


const SongItem = ({ id, image, name, desc }) => {
    return (
        <div className = "min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className = "rounded" src = { image } alt = "Song_Title" />
            <p className = "font-bold mt-2 mb-1">{ name }</p>
            <p className = "text-slate-200 text-sm">{ desc }</p>
        </div>
    ) ;
} ;


export default SongItem ;
