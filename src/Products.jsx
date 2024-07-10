import React from "react";
import product1 from "./assets/product-1.png";
import product2 from "./assets/product-2.png";
import product3 from "./assets/product-3.png";
import product4 from "./assets/product-4.png";
import product5 from "./assets/product-5.png";
import product6 from "./assets/product-6.png";
import product7 from "./assets/product-7.png";
import product8 from "./assets/product-8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const productsData = [
    {
        id: 1,
        image: product1,
        title: "fresh orange",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 2,
        image: product2,
        title: "fresh Onion",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 3,
        image: product3,
        title: "fresh Meat",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 4,
        image: product4,
        title: "fresh Cabbage",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 5,
        image: product5,
        title: "fresh potato",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 6,
        image: product6,
        title: "fresh papita",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 7,
        image: product7,
        title: "fresh carit",
        price: "$12.99/- - 15.99/-"
    },
    {
        id: 8,
        image: product8,
        title: "fresh lemon",
        price: "$12.99/- - 15.99/-"
    },
    
];


const Products = () => {
    
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            
            {
                breakpoint: 1535,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
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

    return(
        <>
        <section className="pt-14 pb-10 px-44 xs:px-6 text-[--black]">
            <h1 className="heading font-bold text-center xs:text-[30px]">Our <span>Products</span></h1>
            <Slider {...settings}>
                {productsData.map((data) => (
                    <>
                    <div className="flex justify-center">
                        <div key={data.id} className="bg-white w-[500px] p-4 outline-[--light-color] outline-offset-[-1rem] rounded-lg shadow-xl hover:shadow-[--green] text-center lg:mx-2">
                            <div className="flex justify-center h-44 mt-4 ">
                                <img src={data.image}/>
                            </div>
                                <h3 className="font-bold py-3 text-2xl">{data.title}</h3>
                                <p className="text-xl text-[--light-color]">{data.price}</p>
                            <div className="text-[orange] text-xl pt-4 mb-2 space-x-1">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                            </div>
                            <button className="btn mb-8 pl-6 pr-6">Add To Cart</button>
                        </div>
                    </div>
                    </> 
                ))} 
            </Slider>
        </section>
        </>
    );
};

export default Products;