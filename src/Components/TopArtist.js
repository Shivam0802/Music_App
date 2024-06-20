import React from "react";
import { useNavigate } from "react-router-dom";

const TopArtist = ({image, name, desc, id}) => {

    const navigate = useNavigate();

    return (
        <div onClick={()=>(navigate(`/artist/${id}`))} className="min-w-40 h-fit p-2 rounded-lg cursor-pointer hover:bg-[#ffffff26] gap-4">
            <img src={image} alt='album' className="rounded-lg w-40" />
            <p className="text-[16px] font-semibold text-gray-300">{name}</p>
            <p className="text-[13px] text-gray-400 font-light">{desc}</p>
        </div>
    )
}

export default TopArtist;