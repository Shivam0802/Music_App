import React, { useContext } from 'react';
import { PlayerContext } from '../Context/playerContext';

const SongCard = ({ image, songname, artistname, id }) => {

    const { nextTrack } = useContext(PlayerContext);

    return (
        <div onClick={() => nextTrack(id)} className="w-60 p-2 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img src={image} alt="cover" className="w-60 h-60 rounded-lg" />
            <h1 className="text-sm font-semibold text-orange-200">{songname}</h1>
            <p className="text-[10px] text-gray-200">{artistname}</p>
        </div>
    )
}

export default SongCard;