import React, { useContext } from 'react';
import { PlayerContext } from '../Context/playerContext';

const Favorites = () => {
    const { favorites, nextTrack } = useContext(PlayerContext);

    return (
            <div className="p-4" style={{ backgroundImage: 'linear-gradient(135deg, #247BA0 10%, #FFFFB5 100%)' }}>
            <h2 className="text-3xl font-semibold text-[#FFFED3] mb-4">Favorites</h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 mb-4 pl-4 text-[#a7a7a7]">
                <p><b className="mr-2">#</b>Title</p>
                <p className="ml-[3.12rem]">Date Added</p>
                <p className="flex"><img src="/Assets/clock.png" alt='Clock icon' className="mr-2 w-6 h-auto" aria-label="Duration" />Duration</p>
                <p className="ml-[4.8rem]">Action</p>
            </div>
            <hr className="border-[#a7a7a7] mb-4" />
            {favorites.length > 0 ? (
                favorites.map((song, index) => (
                    <div key={song.id} className="grid grid-cols-4 sm:grid-col-4 gap-2 p-2 text-[#a7a7a7] hover:bg-[#2424242b] rounded-md cursor-pointer">
                        <div className="flex items-center">
                            <div className="w-10">
                                <p className="mr-1">{index + 1}</p>
                            </div>
                            <div className="flex flex-row ml-1">
                                <img src={song.images} alt='song' className="w-10 h-10" />
                                <p onClick={() => nextTrack(song.id)} className="ml-2 text-white">{song.name}</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-gray-500 hidden ml-[4rem] sm:block">2 Days ago</p>
                        <p className="text-[15px] ml-[2.35rem] text-gray-200">{song.duration}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No favorite songs added yet.</p>
            )}
        </div>
    );
};

export default Favorites;
