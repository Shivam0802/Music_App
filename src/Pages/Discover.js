// import React from "react";
// import SongCard from "../Components/SongCard";
// import { songData, genres } from "../StaticData/constant";
// import Navbar from "../Components/Navbar";

// const Home = () => {

//     const filteredSongs = songData.filter((song) => song.language === "English");

//     return (
//         <>
//             <Navbar />
//             <div className="flex flex-col mt-4 ">
//                 <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-4 mb-10">
//                     <h1 className="text-3xl font-semibold text-white mb-4">Discover Songs</h1>
//                     <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
//                         {genres.map((genre) => (
//                             <option key={genre.value} value={genre.value}>{genre.title}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 sm:gap-4 ">
//                     {
//                         filteredSongs.map((song) => (
//                             <SongCard
//                                 key={song.id}
//                                 id={song.id}
//                                 image={song.images}
//                                 songname={song.name}
//                                 artistname={song.artists}
//                             />
//                         ))
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home;

import React, { useState } from "react";
import SongCard from "../Components/SongCard";
import { songData, genres } from "../StaticData/constant";
import Navbar from "../Components/Navbar";

const Home = () => {
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredSongs = selectedGenre
        ? songData.filter((song) => song.genre.includes(selectedGenre))
        : songData;

    return (
        <>
            <Navbar />
            <div className="flex flex-col mt-4 ">
                <div className="w-full flex items-center justify-between sm:flex-row flex-col mt-4 mb-10">
                    <h1 className="text-3xl font-semibold text-white mb-4">Discover Songs</h1>
                    <select
                        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                        onChange={handleGenreChange}
                    >
                        <option value="">All</option>
                        {genres.map((genre) => (
                            <option key={genre.value} value={genre.value}>{genre.title}</option>
                        ))}
                    </select>
                </div>
                <div className="grid sm:grid-cols-5 sm:gap-4">
                    {filteredSongs.map((song) => (
                        <SongCard
                            key={song.id}
                            id={song.id}
                            image={song.images}
                            songname={song.name}
                            artistname={song.artists}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
