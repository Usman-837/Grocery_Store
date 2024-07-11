import React from "react";
import payemnt from "./assets/payment.png";


const Footer = () => {
    return(
        <>
            <footer className="bg-white pt-10 pb-14">
                <div className="flex justify-center flex-wrap gap-40">
                    <div>
                        <a><span className="text-2xl font-bold text-[--black]">Groco </span><i className="fa-solid fa-basket-shopping text-[--green] text-xl"></i></a>
                        <p className="text-[--light-color] text-sm pt-6 pb-4 leading-loose">Feel Free To Follow Us On Our Social Media<br/> Handlers All The Links Are Given Below.</p>
                        <div className="flex">
                            <div className="bg-[#eee] h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></div>
                            <div className="bg-[#eee] h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white"><a href="#"><i className="fa-brands fa-twitter"></i></a></div>
                            <div className="bg-[#eee] h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white"><a href="#"><i className="fa-brands fa-instagram"></i></a></div>
                            <div className="bg-[#eee] h-9 w-10 mr-2 boder rounded text-center pt-1.5 cursor-pointer hover:bg-[--green] hover:text-white"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-[--black]">Contact info</h3>
                        <div className="flex flex-col pt-6 pb-4 text-purple-800 text-md space-y-4">
                            <a href="#" className="link"><i className="fa-solid fa-phone text-[--green] pr-2"></i> +123-456-7890</a>
                            <a href="#" className="link"><i className="fa-solid fa-phone text-[--green] pr-2"></i> +111-222-3333</a>
                            <a href="#" className="link"><i className="fa-solid fa-envelope text-[--green] pr-2"></i> example@gmail.com</a>
                            <a href="#" className="link"><i className="fa-solid fa-location-dot text-[--green] pr-2"></i> faisalabad pakistan</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-[--black]">Quick Links</h3>
                        <div className="flex flex-col pt-6 pb-4 text-purple-800 text-md space-y-4">
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Home</a>
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Features</a>
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Products</a>
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Categories</a>
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Review</a>
                            <a href="#" className="link"><i className="fa fa-arrow-right text-[--green] pr-2"></i> Blogs</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-[--black]">Newsletter</h3>    
                        <p className="text-[--light-color] pt-8 pb-4">subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="bg-[#eee] w-full pl-4 h-12 rounded-lg text-[--light-color]"/>
                        <a href="#" className="btn mt-6">subscribe</a>
                        <img src={payemnt} className="mt-6"/>
                    </div>
                </div>
                <div className="pt-12">
                    <hr className="border-b-1 border-solid border-gray-500 mx-44"/>
                    <p className="text-center pt-4">created by <span className="text-[--green]">muhammad usman</span> | all rights reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;