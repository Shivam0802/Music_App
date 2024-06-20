import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
                <IoIosArrowDropleftCircle onClick={() => navigate(-1)} className="text-3xl" style={{ color: 'whitesmoke' }} />
                <IoIosArrowDroprightCircle onClick={() => navigate(1)} className="text-3xl" style={{ color: 'whitesmoke' }} />
            </div>
            <div className="flex items-center space-x-3 m-4">
                <Link to="/login">
                    <button className="p-2 bg-gray-300 text-gray-900 rounded-md" style={{ fontSize: '17px' }}>
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="p-2 bg-orange-200 text-gray-900 rounded-md">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;