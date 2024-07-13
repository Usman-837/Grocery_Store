import React from "react";
import feature1 from "./assets/feature-img-1.png";
import feature2 from "./assets/feature-img-2.png";
import feature3 from "./assets/feature-img-3.png";

const featureData = [
    {
        id: 1,
        image: feature1,
        title: "fresh and organic",
        description: "Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor."
    },
    {
        id: 2,
        image: feature2,
        title: "fresh and organic",
        description: "Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor."
    },
    {
        id: 3,
        image: feature3,
        title: "fresh and organic",
        description: "Fresh Products Are Usually Consumed Shortly After Harvest To Retain Their Natural Flavor."
    }
];


const Features = () => {
    return(
        <>
        <section id="features" className="pt-14 pb-10 small:px-4 medium:px-14 large:px-14 x-large:px-20 2x-large:px-24 px-28">
            <h1 className="heading font-bold text-center small:text-2xl medium:text-3xl">Our <span>Features</span></h1>
            <div className="flex justify-center small:flex-wrap gap-6 medium:gap-2 2x-large:gap-4 text-[--black]">
            {featureData.map((data) => (
               <>
                    <div key={data.id} className="bg-white w-[500px] p-4 2x-large:p-3 rounded-md shadow-xl hover:shadow-[--green] outline-1 outline-[--light-color] outline-offset-[-1rem]">
                        <div className="text-center p-4">
                            <div className="flex justify-center">
                                <img src={data.image} className="py-4 small:w-28 medium:w-28 large:w-40 x-large:w-40 2x-large:w-48"/>
                            </div>
                            <h3 className="font-bold py-3 text-3xl small:text-lg medium:text-sm large:text-xl x-large:text-xl 2x-large:text-2xl">{data.title}</h3>
                            <p className="text-[--light-color] medium:text-xs large:text-sm x-large:text-sm">{data.description}</p>
                            <button className="btn small:text-sm medium:text-xs small:p-4 small:pt-2 small:pb-2 large:p-3 large:pt-1 large:pb-1 x-large:p-3 x-large:pb-1 x-large:pt-1 2x-large:pl-6 2x-large:pr-6 large:text-sm 2x-large:text-lg">Read More</button>
                        </div>
                    </div>            
               </> 
            ))}
            </div>
        </section>
        </>
    );
};

export default Features;