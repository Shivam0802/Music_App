import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import {MdOutlineManageSearch } from "react-icons/md";
import { PiCirclesThreePlusBold,PiDotsThreeOutlineVerticalBold,PiPlaylistBold } from "react-icons/pi";
import { BsWindowStack } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { TbPlaylistAdd } from "react-icons/tb";
import { HiFolder } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col w-[20%] p-2 h-full gap-2 hidden lg:flex">
            <div className="bg-[#19191b] h-[10%] rounded flex flex-col justify-around">
                <div className="flex items-center justify-center h-full" style={{ background: '#19191b' }}>
                    <img src="/Assets/Logo.png" alt="logo" className="h-8" style={{ width: '50%' }} />
                </div>
            </div>
            <div className="bg-[#19191b] rounded flex flex-col h-fit p-2">
                <div className="flex flex-col p-2" style={{ background: '#19191b' }}>
                    <Link to='/' className=" flex items-center space-x-2 text-white p-2  rounded-md hover:bg-gray-700">
                        <IoHome size={20} style={{ color: 'steelblue' }} />
                        <span style={{ fontSize: '18px' }}>Home</span>
                    </Link>
                    <Link to='/discover' className="flex items-center space-x-2 text-white p-2 rounded-md hover:bg-gray-700">
                        <TiThList size={20} style={{ color: 'yellowgreen' }} />
                        <span style={{ fontSize: '18px' }}>Discover</span>
                    </Link>
                    <Link to='/artists' className=" flex items-center space-x-2 text-white p-2  rounded-md hover:bg-gray-700">
                        <PiCirclesThreePlusBold size={20} style={{ color: 'thistle' }} />
                        <span style={{ fontSize: '18px' }}>Artist</span>
                    </Link>
                    <Link to='/charts' className="flex items-center space-x-2 text-white p-2 rounded-md hover:bg-gray-700">
                        <PiPlaylistBold size={20} style={{ color: 'turquoise' }} />
                        <span style={{ fontSize: '18px' }}>Charts</span>
                    </Link>
                    <Link to="/search" className="flex items-center space-x-2 text-white  p-2 rounded-md hover:bg-gray-700">
                        <MdOutlineManageSearch size={25} style={{ color: 'slategray' }} />
                        <span style={{ fontSize: '18px' }}>Search</span>
                    </Link>
                </div>
            </div>
            <div className="bg-[#19191b] rounded h-[65%]">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BsWindowStack size={20} style={{ color: 'whitesmoke' }} />
                        <h2 className="font-medium text-white text-[18px]">Your Playlist</h2>
                    </div>
                    <div className="flex gap-2">
                    <div>
                        <button onClick={toggleDropdown}>
                            <IoMdAdd size={20} style={{ color: 'whitesmoke' }} />
                        </button>
                        <div className={`absolute left-3 mt-2 w-fit bg-[#121212] rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
                            <div className="block flex flex-row gap-2  px-2 py-2 text-gray-200 hover:bg-[#242424] rounded cursor-pointer">
                                <TbPlaylistAdd size={20} style={{ color: 'turquoise' }} />
                                Create Playlist
                            </div>
                            <div className="block flex flex-row gap-2 px-2 py-2 text-gray-200 hover:bg-[#242424] rounded cursor-pointer">
                                <HiFolder size={20} style={{ color: 'thistle' }} />
                                Create new Playlist Folder
                            </div>
                        </div>
                    </div>
                    <PiDotsThreeOutlineVerticalBold size={20} style={{ color: 'whitesmoke' }} />
                    </div>
                </div>
                <div className="p-2 bg-[#242424] m-2 rounded font-medium text-white flex flex-col item-start justify-start gap-2">
                    <Link to='/favorites' className="flex items-center gap-2 text-gray-200 hover:bg-[#242424] rounded p-2">
                        <FaListCheck size={20} style={{ color: 'turquoise' }} />
                        <span>Favorites</span>
                    </Link>
                </div>
                <div className="p-2 flex items-center gap-3">
                    <img src="/Assets/subscription.png" alt="subscription" className="h-8" />
                    <h2 className="font-medium text-white text-[18px]">Subscription</h2>
                </div>
                <div className="p-2 bg-[#242424] m-2 rounded font-medium text-white flex flex-col item-start justify-start gap-1 pl-4">
                    <h1 className="text-[17px] font-medium text-blue-300">Upgrade to Premium</h1>
                    <p className="font-light text-[15px]">
                        Get unlimited access to music.
                    </p>
                    <Link to="/subscription" className="bg-green-200 text-gray-900 p-2 rounded-full mt-4">
                        <button className="ml-8">Explore Premium</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;