import React from "react";

const Banner = () => {
    return(
        <>
        <div className="bg-banner-img bg-cover bg-no-repeat h-[350px] flex justify-center"> 
                <div className="mt-16 ml-20 w-[600px] sm:ml-4">
                    <h3 className="font-bold text-3xl pb-3 pl-2 sm:text-xl sm:pl-0">fresh and <span className="text-[--green]">organic</span> products for you</h3>
                    <p className="text-sm">Fresh And Organic Products Refer To Food Items That Are Produced And Prepared With Minimal Processing Without Use Of Synthetic Chemicals.</p>
                    <a className="btn ml-40 sm:ml-20 mt-8">Shop Now</a>
                </div>
        </div>
        </>
    );
};

export default Banner;