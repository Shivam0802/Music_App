import React,{useEffect, useRef} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Discover from "./Pages/Discover";
import Register from "./Components/Register";
import Searchbar from "./Components/Search";
import DisplayArtist from "./Pages/DisplayArtist";
import TopArtists from "./Pages/TopArtist";
import TopCharts from "./Pages/Topcharts";
import DisplayPlaylist from "./Pages/DisplayPlaylist";
import Subscription from "./Pages/Subscription";
import FullScreen from "./Pages/FullScreen";
import DisplayAlbum from "./Pages/DisplayALbum";
import { albumData, playlistData,artistData } from "./StaticData/constant";

const Routing = () => {

    const DisplayRef = useRef(null);
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : '';
    const bgColor = albumData[Number(albumId)]?.bgColor;

    const isPlaylist = location.pathname.includes('playlist');
    const playlistId = isPlaylist ? location.pathname.slice(-1) : '';
    const playlistBgColor = playlistData[Number(playlistId)]?.playlistBgColor;

    const isArtist = location.pathname.includes('artist');
    const artistId = isArtist ? location.pathname.slice(-1) : '';
    const artistBgColor = artistData[Number(artistId)]?.artistBgColor;
    
    useEffect(() => {
        if(isAlbum){
            DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        }else{
            DisplayRef.current.style.background = '#121212';
        }
    }, [location])

    useEffect(() => {
        if(isPlaylist){
            DisplayRef.current.style.background = `linear-gradient(${playlistBgColor},#121212)`;
        }else{
            DisplayRef.current.style.background = '#121212';
        }
    }, [location])

    useEffect(() => {
        if(isArtist){
            DisplayRef.current.style.background = `linear-gradient(${artistBgColor},#121212)`;
        }else{
            DisplayRef.current.style.background = '#121212';
        }
    }, [location])

    return (
        <div ref={DisplayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-gray-200 overflow-auto ml-0">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/artists" element={<TopArtists />} />
            <Route path="/charts" element={<TopCharts />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/playlist/:id" element={<DisplayPlaylist />} />
            <Route path="/search" element={<Searchbar />} />
            <Route path="/artist/:id" element={<DisplayArtist />} />
            <Route path="/fullscreen" element={<FullScreen />} />
        </Routes>
        </div>
    )
}

export default Routing;