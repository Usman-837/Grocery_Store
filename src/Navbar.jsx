import React, { useState } from "react";
import watermelon from "./assets/cart-img-1.png";
import onion from "./assets/cart-img-2.png";
import chicken from "./assets/cart-img-3.png";

const Navbar = () => {
   
    const [search , setSearch] = React.useState(false);
    const [shopcart , setShopcart] = React.useState(false);
    const [login , setLogin] = React.useState(false);

    return(
        <>
        <header className="bg-white h-24 pt-8 flex justify-around shadow-md shadow-gray-300">
            {/* logo */}
            <a href="" className=""><i className="fa-solid fa-basket-shopping text-[--green] text-xl"></i><pan className="text-purple-800 text-2xl font-bold">Grocery</pan></a>

            {/* Menu Bar */}
            <nav className="text-gray-700">
                <a href="#" className="pl-8 hover:text-green-600">Home</a>
                <a href="#" className="pl-8 hover:text-green-600">Features</a>
                <a href="#" className="pl-8 hover:text-green-600">Products</a>
                <a href="#" className="pl-8 hover:text-green-600">Categories</a>
                <a href="#" className="pl-8 hover:text-green-600">Review</a>
                <a href="#" className="pl-8 hover:text-green-600">Blogs</a>
            </nav>

            {/* icons */}
            <div className="flex"> 
                <div className="bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> setSearch(!search)}><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="bg-gray-200 h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> setShopcart(!shopcart)}><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="bg-gray-200 h-9 w-10 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> setLogin(!login)}><i class="fa-solid fa-user"></i></div>
            </div>

            {/* Seach Bar */}
            {
                search ? <form className="absolute top-28 bg-white p-3 border rounded-lg w-96 text-gray-400 flex justify-between shadow-md shadow-gray-500 right-20">
                <input type="search" id="search-box" placeholder="Search here ....." className="normal-case"/>
                <label for="search-box"><i className="fa-solid fa-magnifying-glass hover:text-[--green] font-bold text-lg"></i></label>
                </form> : null
            }
            
            {/* Shopping Cart */}
            {
                shopcart ? <div className="absolute top-28 bg-white p-3 border rounded-lg w-80 shadow-md shadow-gray-500 right-20">
                <div className="flex justify-between mt-2 p-2">
                    <img src={watermelon} className="w-24"/>
                    <div className="mt-6  mr-8">
                        <p className="font-bold text-[--black]">watermelon</p>
                        <span className="text-[--light-color] text-sm">$5.99/-</span>
                        <span className="text-[--light-color] text-sm ml-6"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 text-[--light-color] mr-4 text-lg"></i>
                </div>
                <div className="flex justify-between p-2">
                    <img src={onion} className="w-24"/>
                    <div className="mt-6  mr-8">
                        <p className="font-bold text-[--black]">Onion</p>
                        <span className="text-[--light-color] text-sm">$4.99/-</span>
                        <span className="text-[--light-color] text-sm ml-6"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 text-[--light-color] mr-4 text-lg"></i>
                </div>
                <div className="flex justify-between p-2">
                    <img src={chicken} className="w-24"/>
                    <div className="mt-6  mr-8">
                        <p className="font-bold text-[--black]">Chicken</p>
                        <span className="text-[--light-color] text-sm">$4.99/-</span>
                        <span className="text-[--light-color] text-sm ml-6"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 text-[--light-color] mr-4 text-lg"></i>
                </div>
                <div className="p-2">
                    <p className="text-center text-2xl text-[--black]">Total : $17.95/-</p>
                    <button className="btn w-full ">Checkout</button>
                </div>
            </div> : null 
            } 

            {/* login Page    */}
            {
                login ?  <div className="absolute top-28 bg-white border rounded-lg w-[360px] shadow-md shadow-gray-500 right-20">
                <div className="flex flex-col justify-center p-8">
                    <h1 className="text-center font-bold text-[--black] text-2xl uppercase mb-4">login now</h1>
                    <input type="email" placeholder="Enter your email" className="bg-gray-200 rounded-md p-2 text-[--light-color] normal-case mb-4"/>
                    <input type="password" placeholder="Enter your password" className="bg-gray-200 rounded-md p-2 text-[--light-color] normal-case mb-4"/>
                    <p className="text-[--light-color] text-center mb-2 text-[15px]">forget your password <a href="#" className="text-[--green] underline"> click here</a></p>
                    <p className="text-[--light-color] text-center text-[15px]">don't have and account <a href="#" className="text-[--green] underline"> create now</a></p>
                    <div className="flex justify-center">
                        <button className="btn w-52 text-[16px] capitalize">login now</button>
                    </div>
                </div>
            </div> : null
            }         
        </header>
        </>
    );
};

export default Navbar;