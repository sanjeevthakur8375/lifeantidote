import SectionTitleOne from "../../../components/Sections/SectionTitle/SectionTitleOne";

// import Button from "../../../Control/Button";
// import Image from "next/image";

import { PrevArrow, NextArrow } from "../../../components/Other/SliderArrow";
import axios from "axios";
import React, { useState, useEffect } from "react";
import BrandsOne from "../Brands/BrandsOne";

export default function BrandSlideOne({ data }) {
  const [brands, setBrands] = useState([]);
  console.log("start");

  const fetchData = async () => {
    try {
      
      const url_brands = `${baseUrl}/api/get/brand`;
      const res_brand = await axios.get(url_brands, { withCredentials: true });
      setBrands(res_brand.data.findBrands);

    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      fetchData();
    }, []);

    console.log(minData);

   const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "product-slide__wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


    return (
      <div className="product-slide">
      <div className="container">
        <SectionTitleOne align="center" spaceBottom="50px">
          Our Brands
        </SectionTitleOne>

        <div className="product-slider">
          <Slider {...settings}>
            {brands?.map((data, index) => (
              <div key={data._id}>
                <div className="card">
                  <img src={data?.main_category_image?.image_url} width="345" height="250"></img>
                </div>

                <div className="title">{data?.main_category_image?.image_name} </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    );
  };
}
