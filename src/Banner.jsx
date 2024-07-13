import React from "react";

const Banner = () => {
    return(
        <>
        <section id="home" className="bg-banner-img bg-cover bg-no-repeat h-[350px] flex justify-center"> 
                <div className="w-[600px] small:w-[400px] text-center mt-16">
                    <h3 className="font-bold text-3xl large:text-2xl small:text-lg pb-3 pl-2">fresh and <span className="text-[--green]">organic</span> products for you</h3>
                    <p className="text-sm small:text-xs text-[--light-color] medium:text-black leading-6 mt-2">Fresh And Organic Products Refer To Food Items That Are Produced And Prepared With Minimal Processing Without Use Of Synthetic Chemicals.</p>
                    <a className="btn mt-8 medium:pl-6 medium:pr-6 medium:text-sm small:text-white small:border-white">Shop Now</a>
                </div>
        </section>
        </>
    );
};

export default Banner;