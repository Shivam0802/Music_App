import React, { useContext } from "react";
import { PlayerContext } from "../Context/playerContext";

const FullScreen = () => {
    const { track } = useContext(PlayerContext);

    if (!track) {
        return <div>Loading...</div>;
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center">
            <button className="absolute top-4 right-4 bg-[#242424] p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <section className="mt-10 w-full p-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img src={track.images} alt="Album cover" className="rounded w-96 h-96" aria-label={track.name} />
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold mb-4 text-[#EE4266] md:text-5xl">{track.name}</h2>
                    <h4>{track.desc}</h4>
                    <p className="mt-1">
                        <img src='/Assets/Logo1.png' alt='Artist logo' className="w-10 h-10 inline-block" aria-label="Melodify" />
                        <b>Melodify</b>
                        <ul className="flex gap-6 list-disc pl-6">
                            <li>15,454 Likes</li>
                        </ul>
                    </p>
                    <p className="text-2xl text-[#F9E897]">{track.artists}</p>
                </div>
            </section>
        </div>
    );
};

export default FullScreen;