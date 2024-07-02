import React from "react";

const Navbar = () => {
    return(
        <>
        <header className="bg-white h-24 pt-8 flex justify-around">
            {/* logo */}
            <a href="" className=""><i className="fa-solid fa-basket-shopping text-green-700 text-xl"></i><pan className="text-purple-800 text-xl font-bold">Grocery</pan></a>

            {/* Menu Bar */}
            <nav className="text-gray-700">
                <a href="" className="pl-8 hover:text-green-800">Home</a>
                <a href="" className="pl-8 hover:text-green-700">Features</a>
                <a href="" className="pl-8 hover:text-green-700">Products</a>
                <a href="" className="pl-8 hover:text-green-700">Categories</a>
                <a href="" className="pl-8 hover:text-green-700">Review</a>
                <a href="" className="pl-8 hover:text-green-700">Blogs</a>
            </nav>

            {/* icons */}
            <div className="flex"> 
                <div className="search bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="bg-gray-200 h-9 w-10 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-user"></i></div>
            </div>

            {/* Seach Bar */}
            <form className="search-form absolute top-28 bg-white p-3 border rounded-lg w-96 text-gray-400 flex justify-between shadow-md shadow-gray-500 right-20">
                <input type="search" name="" id="search-box" placeholder="Search here ....." className="normal-case"/>
                <label for="search-box"><i className="fa-solid fa-magnifying-glass hover:text-green-600 font-bold text-lg"></i></label>
            </form>
        </header>
        </>
    );
};

export default Navbar;