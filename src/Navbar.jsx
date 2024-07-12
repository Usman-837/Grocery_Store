import React, { useState } from "react";
import watermelon from "./assets/cart-img-1.png";
import onion from "./assets/cart-img-2.png";
import chicken from "./assets/cart-img-3.png";

const Navbar = () => {
   
    const [search , setSearch] = React.useState(false);
    const [shopcart , setShopcart] = React.useState(false);
    const [login , setLogin] = React.useState(false);
    const [menu , setMenu] = React.useState(false);

    return(
        <>
        <header className="bg-white h-24 pt-8 flex justify-between shadow-md shadow-gray-300 small:px-4 medium:px-14 large:px-14 x-large:px-20 2x-large:px-24 px-28">
            {/* logo */}
            <a href="#"><i className="fa-solid fa-basket-shopping text-[--green] text-xl small:text-md large:text-lg"></i><span className="text-purple-800 text-2xl small:text-lg large:text-xl font-bold">Grocery</span></a>

            {/* Menu Bar */}
            <nav className="text-gray-700 medium:hidden large:text-sm">
                <a href="#home" className="hover:text-green-600">Home</a>
                <a href="#features" className="pl-8 x-large:pl-4 2x-large:pl-6 hover:text-green-600">Features</a>
                <a href="#products" className="pl-8 x-large:pl-4 2x-large:pl-6 hover:text-green-600">Products</a>
                <a href="#categories" className="pl-8 x-large:pl-4 2x-large:pl-6 hover:text-green-600">Categories</a>
                <a href="#review" className="pl-8 x-large:pl-4 2x-large:pl-6 hover:text-green-600">Review</a>
                <a href="#blogs" className="pl-8 x-large:pl-4 2x-large:pl-6 hover:text-green-600">Blogs</a>
            </nav>
          
            {/* icons */}
            <div className="flex small:text-sm"> 
                <div className="bg-[#eee] h-9 small:h-8 w-10 small:w-9 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> {setSearch(!search); setShopcart(false); setLogin(false); setMenu(false)}}><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className="bg-[#eee] h-9 small:h-8 w-10 small:w-9 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> {setShopcart(!shopcart); setSearch(false); setLogin(false); setMenu(false)}}><i className="fa-solid fa-cart-shopping"></i></div>
                <div className="bg-[#eee] h-9 small:h-8 w-10 small:w-9 mr-2  boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white" onClick={()=> {setLogin(!login); setSearch(false); setShopcart(false); setMenu(false)}}><i className="fa-solid fa-user"></i></div>
                <div className="bg-[#eee] h-9 small:h-8 w-10 small:w-9 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white hidden medium:block" onClick={()=> {setMenu(!menu); setSearch(false); setShopcart(false); setLogin(false)}}><i className="fa-solid fa-bars"></i></div>
            </div>

            {/* Seach Bar */}
            {
                search ? <form className="absolute top-28 small:top-24 bg-white p-3 border rounded-lg w-96 text-gray-400 flex justify-between shadow-md shadow-gray-500 right-32 small:right-0 large:right-16 x-large:right-24 2x-large:right-28 small:w-full">
                <input type="search" id="search-box" placeholder="Search here ....." className="normal-case"/>
                <label for="search-box"><i className="fa-solid fa-magnifying-glass hover:text-[--green] font-bold text-lg"></i></label>
                </form> : null
            }
            
            {/* Shopping Cart */}
            {
                shopcart ? <div className="absolute top-28 small:top-24 bg-white p-3 border rounded-lg w-80 small:w-72 shadow-md shadow-gray-500 z-50 right-32 small:right-4 large:right-16 x-large:right-24 2x-large:right-28 small:h-80">
                <div className="flex justify-between mt-2 small:mt-0 p-2 small:p-0">
                    <img src={watermelon} className="w-24 small:w-16"/>
                    <div className="mt-6 small:mt-2 mr-8 small:mr-6">
                        <p className="font-bold text-[--black] small:text-sm">watermelon</p>
                        <span className="text-[--light-color] text-sm small:text-xs">$5.99/-</span>
                        <span className="text-[--light-color] text-sm small:text-xs ml-6 small:ml-4"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 small:mt-4 text-[--light-color] mr-4 text-lg small:text-sm"></i>
                </div>
                <div className="flex justify-between p-2 small:p-0">
                    <img src={onion} className="w-24 small:w-16"/>
                    <div className="mt-6 small:mt-2 mr-8 small:mr-6">
                        <p className="font-bold text-[--black] small:text-sm">Onion</p>
                        <span className="text-[--light-color] text-sm small:text-xs">$4.99/-</span>
                        <span className="text-[--light-color] text-sm  small:text-xs ml-6 small:ml-4"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 small:mt-4 text-[--light-color] mr-4 text-lg small:text-sm"></i>
                </div>
                <div className="flex justify-between p-2 small:p-0">
                    <img src={chicken} className="w-24 small:w-16"/>
                    <div className="mt-6 small:mt-2 mr-8 small:mr-6">
                        <p className="font-bold text-[--black] small:text-sm">Chicken</p>
                        <span className="text-[--light-color] text-sm small:text-xs">$4.99/-</span>
                        <span className="text-[--light-color] text-sm small:text-xs ml-6 small:ml-4"> Qty:1</span>
                    </div>
                    <i className="fa-solid fa-trash mt-8 small:mt-4 text-[--light-color] mr-4 text-lg small:text-sm"></i>
                </div>
                <div className="p-2">
                    <p className="text-center text-2xl text-[--black] small:text-lg">Total : $17.95/-</p>
                    <button className="btn w-full small:text-sm">Checkout</button>
                </div>
            </div> : null 
            } 

            {/* login Page    */}
            {
                login ?  <div className="absolute top-28 bg-white border rounded-lg w-[360px] small:w-[260px] shadow-md shadow-gray-500 small:right-4 large:right-16 x-large:right-24 2x-large:right-28 right-32">
                <div className="flex flex-col justify-center p-8 small:p-4">
                    <h1 className="text-center font-bold text-[--black] text-2xl small:text-xl uppercase mb-4">login now</h1>
                    <input type="email" placeholder="Enter your email" className="bg-[#eee] rounded-md p-2 text-[--light-color] normal-case mb-4 small:text-sm"/>
                    <input type="password" placeholder="Enter your password" className="bg-[#eee] rounded-md p-2 text-[--light-color] normal-case mb-4 small:text-sm"/>
                    <p className="text-[--light-color] text-center mb-2 text-[15px] small:text-xs">forget your password <a href="#" className="text-[--green] underline"> click here</a></p>
                    <p className="text-[--light-color] text-center text-[15px] small:text-xs">don't have an account <a href="#" className="text-[--green] underline"> create now</a></p>
                    <div className="flex justify-center">
                        <button className="btn w-52 small:w-36 small:p-2 text-[16px] small:text-sm capitalize">login now</button>
                    </div>
                </div>
            </div> : null
            }

            {/* Responsive Menu Bar */}
            {
                menu ? <nav className="text-gray-700 medium:absolute medium:flex flex-col medium:top-24 medium:left-0 medium:bg-white medium:w-full medium:py-4 medium:shadow-md medium:shadow-gray-300 hidden small:text-sm">
                <a href="#home" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Home</a>
                <a href="#features" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Features</a>
                <a href="#products" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Products</a>
                <a href="#categories" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Categories</a>
                <a href="#review" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Review</a>
                <a href="#blogs" className="pl-8 hover:text-green-600 medium:hover:bg-[--green] medium:hover:text-white medium:mb-1">Blogs</a>
            </nav> : null
            }         
        </header>
        </>
    );
};

export default Navbar;