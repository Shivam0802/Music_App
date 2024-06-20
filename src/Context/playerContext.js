import { createContext, useEffect, useRef, useState } from "react";
import { songData } from "../StaticData/constant";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const seekVolumeBg = useRef();
    const seekVolumeBar = useRef();

    const [track, setTrack] = useState(songData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mute, setMute] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalDuration: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    async function nextTrack(id) {
        await setTrack(songData[id]);
        await audioRef.current.play();
        setIsPlaying(true);
    };

    const volume = (e) => {
        const volume = (e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth) * 1;
        audioRef.current.volume = volume;
        seekVolumeBar.current.style.width = (volume * 100) + '%';
    };

    const muteAudio = () => {
        if (mute) {
            audioRef.current.volume = 1;
            setMute(false);
        } else {
            audioRef.current.volume = 0;
            setMute(true);
        }
    };

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songData[track.id - 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const next = async () => {
        if (track.id < songData.length - 1) {
            await setTrack(songData[track.id + 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const seekSong = async (e) => {
        const { duration } = audioRef.current;
        const seek = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * duration;
        audioRef.current.currentTime = seek;
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = ((Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100) + '%';
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalDuration: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef]);


    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        isPlaying, setIsPlaying,
        time, setTime,
        play, pause,
        nextTrack,
        previous, next,
        seekSong,
        muteAudio, mute,
        seekVolumeBg, seekVolumeBar, volume
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
