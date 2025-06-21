import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-lg font-bold">LoopedIn</h1>
                <div>
                    <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
                    <Link to="/post-item" className="text-gray-300 hover:text-white px-4">Post Item</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;