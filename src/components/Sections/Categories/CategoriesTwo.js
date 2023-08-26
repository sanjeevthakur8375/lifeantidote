import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { PrevArrow, NextArrow } from "../../Other/SliderArrow";

export default function CategoriesTwo({ data }) {
  const settings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="category-two">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <Link href="/shop/fullwidth-4col">
              <a className="category-two__item">
                <img src={item.icon} alt="Category icon" />
                <h3>{item.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
