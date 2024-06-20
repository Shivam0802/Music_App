import React from "react";
import { Link } from "react-router-dom";
import AlbumItem from "../Components/Topchart";
import PlaylistItem from "../Components/TopPlaylist";
import TopArtist from "../Components/TopArtist";
import SongCard from "../Components/SongCard";
import Navbar from "../Components/Navbar";
import { albumData, artistData, songData, playlistData } from "../StaticData/constant";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-4 mb-4">
                    <h1 className="my-5 font-semibold text-2xl">Top Artist</h1>
                    <Link to="/artists">
                        <button className="text-white p-2 rounded-md hover:text-[#FFBF78]">See All</button>
                    </Link>
                </div>
                <div className="flex flex-row overflow-auto">
                    {
                        artistData.map((item) => (
                            <TopArtist
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                                id={item.id}
                            />
                        )).slice(0, 8)
                    }
                </div>
            </div>
            <div className="mb-4">
                <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-4 mb-4">
                    <h1 className="my-5 font-semibold text-2xl">Top Playlist</h1>
                </div>
                <div className="flex overflow-auto">
                    {
                        playlistData.map((item) => (
                            <PlaylistItem
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                                id={item.id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="mb-4">
                <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-4 mb-4">
                    <h1 className="my-5 font-semibold text-2xl">Top Charts</h1>
                    <Link to="/charts">
                        <button className="text-white p-2 rounded-md hover:text-[#FFBF78]">See All</button>
                    </Link>
                </div>
                <div className="flex overflow-auto">
                    {
                        albumData.map((item) => (
                            <AlbumItem
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                                id={item.id}
                            />
                        )).slice(0, 6)
                    }
                </div>
            </div>
            <div className="mb-4">
                <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-8 mb-4">
                    <h1 className="text-2xl font-semibold text-white">Top Playlist</h1>
                    <Link to="/discover">
                        <button className="text-white p-2 rounded-md hover:text-[#FFBF78]">See All</button>
                    </Link>
                </div>
                <div className="flex overflow-auto">
                    {
                        songData.map((song) => (
                            <SongCard
                                key={song.id}
                                id={song.id}
                                image={song.images}
                                songname={song.name}
                                artistname={song.artists}
                            />
                        )).slice(0, 6)
                    }
                </div>
            </div>
        </>
    )
}

export default Home;