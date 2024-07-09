import React from "react";
import review1 from "./assets/pic-1.png";
import review2 from "./assets/pic-2.png";
import review3 from "./assets/pic-3.png";
import review4 from "./assets/pic-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewData = [
    {
        id: 1,
        image: review1,
        description: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam, Impedit Earum Suscipit",
        name: "John Deo"
    },
    {
        id: 2,
        image: review2,
        description: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam, Impedit Earum Suscipit",
        name: "John Deo"
    },
    {
        id: 3,
        image: review3,
        description: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam, Impedit Earum Suscipit",
        name: "John Deo"
    },
    {
        id: 4,
        image: review4,
        description: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam, Impedit Earum Suscipit",
        name: "John Deo"
    }
];

const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            
            {
                breakpoint: 1535,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>    
            <section className="pt-14 pb-10 px-40 xs:px-6">
                <h1 className="heading font-bold text-center xs:text-[30px]">Customer's <span>Review</span></h1>
                <Slider {...settings}>
                    {ReviewData.map((data) => (                           
                            <div key={data.id} className="w-[500px] text-center outline-[--light-color] outline-offset-[-1rem] p-4 bg-white rounded-lg shadow-xl hover:shadow-[--green]">
                                <div className="flex justify-center pt-6 pb-4">
                                    <img src={data.image} className="w-32 rounded-full"/>
                                </div>
                                <p className="text-[--light-color] leading-loose">{data.description}</p>
                                <h3 className="font-bold py-3 text-2xl">{data.name}</h3>
                                <div className="text-[orange] text-xl pb-6">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half"></i>
                                </div>
                            </div>
                    ))}
                </Slider>
            </section>
        </>
    );
};

export default Review;
