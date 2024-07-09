import React from "react";
import product1 from "./assets/product-1.png";
import product2 from "./assets/product-2.png";
import product3 from "./assets/product-3.png";
import product4 from "./assets/product-4.png";
import product5 from "./assets/product-5.png";
import product6 from "./assets/product-6.png";

const Products = () => {
    
    return(
        <>
        <section className="pt-14 pb-10">
            <h1 className="heading font-bold text-center">Our <span>Products</span></h1>
            <div className="flex justify-center flex-wrap gap-6 text-[--black]">
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product1}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh Orange</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product2}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh Onion</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product3}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh Meat</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product4}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh Cabbage</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div> 
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product5}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh potato</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-lg shadow-xl hover:shadow-[--green]">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center h-52">
                            <img src={product6}/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh potato</h3>
                            <p className="text-2xl">$12.99/- - 15.99/-</p>
                            <div className="text-[orange] text-2xl pt-4">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-4">Add To Cart</button>
                    </div>
                </div>              
            </div>
        </section>
        </>
    );
};

export default Products;