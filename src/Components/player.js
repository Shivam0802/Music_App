import React, { useContext,useState } from "react";
import { PlayerContext } from "../Context/playerContext";
import { FaShuffle, FaPause } from "react-icons/fa6";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { HiArrowsExpand } from "react-icons/hi";
import { TfiLoop } from "react-icons/tfi";
import { TbVolumeOff } from "react-icons/tb";
import { HiOutlineSpeakerWave, HiMiniPlay, HiMiniQueueList, HiArrowsPointingIn } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Player = () => {

    const Navigate = useNavigate();
    const [isFullScreen, setIsFullScreen] = useState(false);

    const { seekBg, track, seekBar, isPlaying, play, pause, time, previous, next, seekSong, muteAudio, mute, seekVolumeBg, seekVolumeBar, volume } = useContext(PlayerContext);

    const handleZoom = () => {
        setIsFullScreen(!isFullScreen);
        if (isFullScreen) {
            Navigate('/');
        } else {
            Navigate('/fullscreen');
        }
    };


    return (
        <>
            <div className="w-full h-20 fixed bottom-0 flex items-center justify-between p-4" style={{ background: '#19191a' }}>
                <div className="flex items-center">
                    <div className="w-14 h-14 bg-gray-700 rounded">
                        <img src={track.images} alt="cover" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <h1 className="text-lg font-bold text-white">{track.name}</h1>
                        <p className="text-sm text-gray-300">{track.desc}</p>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-1 m-auto">
                    <div className="flex gap-4">
                        <FaShuffle className="text-white text-xl" />
                        <MdSkipPrevious onClick={() => previous()} className="text-white text-xl ml-4" />
                        {isPlaying ? <FaPause onClick={pause} className="text-white text-xl ml-4" /> : <HiMiniPlay onClick={play} className="text-white text-xl ml-4" />}
                        <MdSkipNext onClick={() => next()} className="text-white text-xl ml-4" />
                        <TfiLoop className="text-white text-xl ml-4" />
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-gray-200">{time.currentTime.minute}:{time.currentTime.second}</p>
                        <div ref={seekBg} onClick={seekSong} className="w-60 h-1 bg-gray-600 rounded-full cursor-pointer" style={{ width: '500px' }} >
                            <hr ref={seekBar} className="h-1 border-none w-0 bg-orange-200 rounded-full" />
                        </div>
                        <p className="text-gray-200">{time.totalDuration.minute}:{time.totalDuration.second}</p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 opacity-75">
                    <HiMiniQueueList className="text-white text-xl" />
                    {mute ? <TbVolumeOff onClick={() => muteAudio()} className="text-white text-xl" /> : <HiOutlineSpeakerWave onClick={() => muteAudio()} className="text-white text-xl" />}
                    <div ref={seekVolumeBg} onClick={volume} className="w-20 h-1 cursor-pointer bg-gray-600 rounded">
                        <hr ref={seekVolumeBar} className="w-20 h-1 bg-green-300 rounded" />
                    </div>
                    {
                        isFullScreen ? <HiArrowsPointingIn onClick={handleZoom} className="text-white text-xl" /> : <HiArrowsExpand onClick={handleZoom} className="text-white text-xl" />
                    }
                </div>
            </div>
            
        </>
    )
}

export default Player;