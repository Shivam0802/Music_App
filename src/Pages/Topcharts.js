import React from "react";
import { albumData } from "../StaticData/constant";
import { Link } from "react-router-dom";
import AlbumItem from "../Components/Topchart";
import Navbar from "../Components/Navbar";

const Topalbum = () => {
    return (
        <>
        <Navbar />
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-white">Top Charts</h1>
            </div>
            <div className="mb-6">
                <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 sm:gap-4 ">
                {
                    albumData.map((item) => (
                        <AlbumItem
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

export default Topalbum;