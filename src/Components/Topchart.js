import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate();
    return (
        <div onClick={()=>(navigate(`/album/${id}`))} className="w-60 p-2 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img src={image} alt='album' className="rounded w-60 h-60" />
            <p className="text-[16px] font-semibold text-gray-300 ">{name}</p>
            <p className="text-[13px] text-gray-400 font-light">{desc}</p>
        </div>
    )
}

export default AlbumItem;