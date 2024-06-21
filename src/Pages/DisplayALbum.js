import React, { useContext } from "react";
import { PlayerContext } from "../Context/playerContext";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { albumData, songData } from "../StaticData/constant";

const DisplayAlbum = () => {

    const { nextTrack, toggleLike, likedSongs } = useContext(PlayerContext);

    const { id } = useParams();
    const Album_Data = albumData[id];

    if (!Album_Data) {
        return <div>Album not found</div>;
    }

    return (
        <>
            <Navbar />
            <section className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img src={Album_Data.image} alt="Album cover" className="rounded w-60 h-60" aria-label={Album_Data.name} />
                <div className="flex flex-col gap-4">
                    <p>Playlist</p>
                    <h2 className="text-4xl font-semibold mb-4 md:text-5xl">{Album_Data.name}</h2>
                    <h4>{Album_Data.desc}</h4>
                    <p className="mt-1">
                        <img src='/Assets/Logo1.png' alt='Artist logo' className="w-10 h-10 inline-block" aria-label="Melodify" />
                        <b>Melodify</b>
                        <ul className="flex gap-6 list-disc pl-6">
                            <li>15,454 Likes</li>
                            <li>20 Songs</li>
                            <li>1 Hour, 20 Minutes</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-4 sm:grid-cols-4 mt-10 mb-4 pl-4 text-[#a7a7a7]">
                <p><b className="mr-2">#</b>Title</p>
                <p className="ml-[3.12rem]">Date Added</p>
                <p className="flex"><img src="/Assets/clock.png" alt='Clock icon' className="mr-2 w-6 h-auto" aria-label="Duration" />Duration</p>
                <p className="ml-[4.8rem]">Action</p>
            </section>
            <hr className="border-[#a7a7a7] mb-4" />
            {
                songData.map((song) => (
                    <div key={song.id} className="grid grid-cols-4 sm:grid-col-4 gap-2 p-2 text-[#a7a7a7] hover:bg-[#2424242b] rounded-md cursor-pointer">
                        <div className="flex items-center">
                            <div className="w-10">
                                <p className="mr-1">{song.id + 1}</p>
                            </div>
                            <div className="flex flex-row ml-1">
                                <img src={song.images} alt='song' className="w-10 h-10" />
                                <p onClick={() => nextTrack(song.id)} className="ml-2 text-white">{song.name}</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-gray-500 hidden ml-[4rem] sm:block">2 Days ago</p>
                        <p className="text-[15px] ml-[2.35rem] text-gray-200">{song.duration}</p>
                        <div className="flex items-center gap-8">
                            <button className="bg-[#FFF5E1] rounded px-4 py-2 text-gray-900 hover:bg-[#F6E6CB]">
                                Add to Playlist
                            </button>
                            <button
                                className={`py-1 px-3 rounded ${likedSongs.includes(song.id) ? 'bg-[#C80036] text-white' : 'bg-[#DBB5B5] text-gray-900'}`}
                                onClick={() => toggleLike(song)}
                            >
                                {likedSongs.includes(song.id) ? 'Liked' : 'Like'}
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default DisplayAlbum;