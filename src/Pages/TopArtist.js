import React from "react";
import { artistData } from "../StaticData/constant";
import TopArtist from "../Components/TopArtist";
import Navbar from "../Components/Navbar";

const topArtist = () => {
    return (
        <>
        <Navbar />
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-white">Top Artist</h1>
            </div>
            <div className="mb-6">
                <div className="grid sm:grid-cols-7 gap-2 sm:gap-4 ">
                    {
                        artistData.map((item) => (
                            <TopArtist
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default topArtist;