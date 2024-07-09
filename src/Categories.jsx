import React from "react";
import categorie1 from "./assets/cat-1.png";
import categorie2 from "./assets/cat-2.png";
import categorie3 from "./assets/cat-3.png";
import categorie4 from "./assets/cat-4.png";
  

const Categories = () => {
    return(
        <>
        <section className="pt-14 pb-10">
            <h1 className="heading font-bold text-center">Products <span>Categories</span></h1>
            <div className="flex justify-center flex-wrap gap-6 text-[--black] ouline">
                    <div className="w-[370px] text-center outline-[--light-color] outline-offset-[-1rem] p-4 bg-white rounded-lg shadow-xl hover:shadow-[--green]">
                            <div className="flex justify-center pt-10 pb-4">
                                <img src={categorie1} className="w-48"/>
                            </div>
                            <h3 className="font-bold py-3 text-2xl">Vegetables</h3>
                            <p className="text-lg text-[--light-color]">Upto 45% Off</p>
                            <button className="btn mb-8 text-lg pr-8 pl-8">Shop Now</button>
                    </div>
                    <div className="w-[370px] text-center outline-[--light-color] outline-offset-[-1rem] p-4 bg-white rounded-lg shadow-xl hover:shadow-[--green]">
                            <div className="flex justify-center pt-10 pb-4">
                                <img src={categorie2} className="w-48"/>
                            </div>
                            <h3 className="font-bold py-3 text-2xl">Fresh Fruits</h3>
                            <p className="text-lg text-[--light-color]">Upto 45% Off</p>
                            <button className="btn mb-8 text-lg pr-8 pl-8">Shop Now</button>
                    </div>
                    <div className="w-[370px] text-center outline-[--light-color] outline-offset-[-1rem] p-4 bg-white rounded-lg shadow-xl hover:shadow-[--green]">
                            <div className="flex justify-center pt-10 pb-4">
                                <img src={categorie3} className="w-48"/>
                            </div>
                            <h3 className="font-bold py-3 text-2xl">Dairy Products</h3>
                            <p className="text-lg text-[--light-color]">Upto 45% Off</p>
                            <button className="btn mb-8 text-lg pr-8 pl-8">Shop Now</button>
                    </div>
                    <div className="w-[370px] text-center outline-[--light-color] outline-offset-[-1rem] p-4 bg-white rounded-lg shadow-xl hover:shadow-[--green]">
                            <div className="flex justify-center pt-10 pb-4">
                                <img src={categorie4} className="w-48"/>
                            </div>
                            <h3 className="font-bold py-3 text-2xl">Fresh Meat</h3>
                            <p className="text-lg text-[--light-color]">Upto 45% Off</p>
                            <button className="btn mb-8 text-lg pr-8 pl-8">Shop Now</button>
                    </div>
            </div>
        </section>
        </>
    )
};

export default Categories;