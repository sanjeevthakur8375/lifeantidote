import SectionTitleOne from "../../SectionTitle/SectionTitleOne";
import Button from "../../../Control/Button";
// import Image from "next/image";

import ProductSlider from "../Elements/ProductSlider";
import { PrevArrow, NextArrow } from "../../../Other/SliderArrow";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ProductSlideOne({ data }) {
  const [minData, setMainData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     // const url = `${process.env.PUBLIC_URL + "/api/get/all/category"}`;
  //     const url = "http://localhost:5000/api/get/all/category";
  //     const res = await axios.get(url);

  //     console.log("sorce", res.data.all_categories);
  //     setMainData(res.data.all_categories);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "product-slide__wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
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
    <div className="product-slide  homepage_category_logos">
      <div className="container">
        <SectionTitleOne align="center" spaceBottom="50px">
          Our Categories
        </SectionTitleOne>

        <ProductSlider
          data={data}
          sliderSettings={settings}
        />
        <div className="text-center">
          {/* <Button
            action={process.env.PUBLIC_URL + "/api/get/all/category"}
            color="transparent"
            className="-underline"
            // content="View all product"
          /> */}
        </div>
      </div>
    </div>
  );
}
