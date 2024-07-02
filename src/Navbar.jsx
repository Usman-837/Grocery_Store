import React from "react";

const Navbar = () => {
    return(
        <>
        <header className="bg-white h-20 pt-6 flex justify-around">
            {/* logo */}
            <a href="" className=""><i className="fa-solid fa-basket-shopping text-green-700 text-xl"></i><pan className="text-purple-800 text-xl font-bold">Grocery</pan></a>

            {/* Menu Bar */}
            <nav className="text-gray-600">
                <a href="" className="pl-8 hover:text-green-700">Home</a>
                <a href="" className="pl-8 hover:text-green-700">Features</a>
                <a href="" className="pl-8 hover:text-green-700">Products</a>
                <a href="" className="pl-8 hover:text-green-700">Categories</a>
                <a href="" className="pl-8 hover:text-green-700">Review</a>
                <a href="" className="pl-8 hover:text-green-700">Blogs</a>
            </nav>

        </header>
        </>
    );
};

export default Navbar;