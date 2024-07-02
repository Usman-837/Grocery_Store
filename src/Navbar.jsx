import React from "react";

const Navbar = () => {
    return(
        <>
        <header className="bg-white h-24 pt-8 flex justify-around">
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

            {/* icons */}
            <div className="flex"> 
                <div className="bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="bg-gray-200 h-9 w-10 boder rounded text-center pt-1.5 cursor-pointer"><i class="fa-solid fa-user"></i></div>
            </div>
        </header>
        </>
    );
};

export default Navbar;