import React from "react";
import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.jpg";
import blog3 from "./assets/blog-3.jpg";

const blogsData = [
    {
        image: blog1,
        title: "Fresh And Organic Vegetables And Fruites",
        descripton: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa, Nihil"
    },
    {
        image: blog2,
        title: "Fresh And Organic Vegetables And Fruites",
        descripton: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa, Nihil"
    },
    {
        image: blog3,
        title: "Fresh And Organic Vegetables And Fruites",
        descripton: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Culpa, Nihil"
    }
];

const Blogs = () => {
    return(
        <>
        <section className="pt-14 pb-10 text-[--black]">
        <h1 className="heading font-bold text-center xs:text-[30px]">Our <span>Blogs</span></h1> 
            <div className="flex justify-center gap-4 flex-wrap">
                {blogsData.map((data) => (
                    <>
                    <div className="bg-white max-w-[500px] rounded-lg shadow-xl hover:shadow-[--green]">
                        <img src={data.image} className="h-64  w-full rounded-lg"/>
                        <div className="px-6">
                            <div className="flex justify-between text-[--light-color] pt-8">
                                <a href="#"><i className="fa-solid fa-user text-[--green] pr-6"></i>By User</a>
                                <a href="#"><i className="fa-regular fa-calendar text-[--green] pr-6"></i> 1st May, 2023</a>
                            </div>
                            <hr className="border-b-1 border-solid border-gray-300 mt-4"/>
                            <div className="py-6">
                                <h3 className="font-bold text-2xl pb-2">{data.title}</h3>
                                <p className="text-[--light-color]">{data.descripton}</p>
                                <a href="#" className="btn pr-8 pl-8">Read More</a>
                            </div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </section>
        </>
    );
};

export default Blogs;