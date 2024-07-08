import React from "react";
import feature1 from "./assets/feature-img-1.png";
import feature2 from "./assets/feature-img-2.png";
import feature3 from "./assets/feature-img-3.png";

const Features = () => {
    return(
        <>
        <section className="pt-14 pb-10">
            <h1 className="heading font-bold text-center">Our <span>Features</span></h1>
            <div className="flex justify-center gap-6 text-[--black]">
                <div className="bg-white w-[500px] p-4 rounded-md">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center">
                            <img src={feature1} className="py-4"/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh and organic</h3>
                            <p className="text-[--light-color]">Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor.</p>
                            <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-md">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center">
                            <img src={feature2} className="py-6"/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh and organic</h3>
                            <p className="text-[--light-color]">Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor.</p>
                            <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="bg-white w-[500px] p-4 rounded-md">
                    <div className="text-center border-2 border-solid border-black p-4">
                        <div className="flex justify-center">
                            <img src={feature3} className="py-4"/>
                        </div>
                            <h3 className="font-bold py-3 text-3xl">fresh and organic</h3>
                            <p className="text-[--light-color]">Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor.</p>
                            <button className="btn">Read More</button>
                    </div>
                </div>            
            </div>
        </section>
        </>
    );
};

export default Features;