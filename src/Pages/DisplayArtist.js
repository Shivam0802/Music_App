import React, { useContext } from "react";
import { PlayerContext } from "../Context/playerContext";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { artistData, songData } from "../StaticData/constant";

const DisplayArtist = () => {

    const { nextTrack } = useContext(PlayerContext);

    const { id } = useParams();
    const Artist_Data = artistData[id];

    if (!Artist_Data) {
        return <div>Album not found</div>;
    }

    const filteredSongs = songData.filter((song) => {
        // Assuming song.artists is an array of artist names
        return song.artists.includes(Artist_Data.name);
    });
    return (
        <>
            <Navbar />
            <section className="mt-10 flex gap-8 flex-col md:flex-row ">
                <img src={Artist_Data.image} alt="Album cover" className="rounded-lg w-60 h-60" aria-label={Artist_Data.name} />
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-4xl font-semibold text-red-300 mb-4 md:text-5xl">{Artist_Data.name}</h2>
                    <h4 className="text-2xl font-medium text-gray-200">{Artist_Data.desc}</h4>
                    <p className="mt-1">
                        <img src='/Assets/Logo1.png' alt='Artist logo' className="w-10 h-10 inline-block" aria-label="Melodify" />
                        <b>Melodify</b>
                    </p>
                </div>
                <div className="flex flex-col ml-10 mt-10">
                    <h1 className="text-3xl font-semibold text-[#FFFED3] mb-4">About {Artist_Data.name}</h1>
                    <p>{Artist_Data.about}</p>
                </div>
            </section>
            <hr className="border-[#121211] mt-10" />
            <section className="grid grid-cols-4 sm:grid-cols-4 mt-10 mb-4 pl-4 text-[#a7a7a7]">
                <p><b className="mr-2">#</b>Title</p>
                <p className="ml-[3.12rem]">Date Added</p>
                <p className="flex"><img src="/Assets/clock.png" alt='Clock icon' className="mr-2 w-6 h-auto" aria-label="Duration" />Duration</p>
                <p className="ml-[4.8rem]">Action</p>
            </section>
            <hr className="border-[#a7a7a7] mb-4" />
            {
                filteredSongs.map((song,index) => (
                    <div onClick={() => nextTrack(song.id)} key={song.id} className="grid grid-cols-4 sm:grid-col-4 gap-2 p-2 text-[#a7a7a7] hover:bg-[#2424242b] rounded-md cursor-pointer">
                        <div className="flex items-center">
                            <div className="w-10">
                                <p className="mr-1">{index + 1}</p>
                            </div>
                            <div className="flex flex-row ml-1">
                                <img src={song.images} alt='song' className="w-10 h-10" />
                                <p className="ml-2 text-white">{song.name}</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-gray-500 hidden ml-[4rem] sm:block">2 Days ago</p>
                        <p className="text-[15px] ml-[2.35rem] text-gray-200">{song.duration}</p>
                        <div className="flex items-center gap-8">
                            <button className="bg-[#FFF5E1] rounded px-4 py-2 text-gray-900 hover:bg-[#F6E6CB]">
                                Add to Playlist
                            </button>
                            <button className="flex flex-row gap-2 bg-[#373A40] rounded p-2 text-gray-200 hover:bg-[#686D76]">
                                <img src="/Assets/Like.png" alt='Like' className="w-6 h-auto" />
                                Like
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayArtist;
