import LayoutOne from "../components/Layout/LayoutOne";
import SliderTwo from "../components/Sections/Slider/SliderTwo";
import sliderData from "../data/slider/sliderOne.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../data/introduction/introductionTwo.json";
import ProductSlideOne from "../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../data/products.json";
import TestimonialOne from "../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../data/testimonial/data.json";
import TeamOne from "../components/Sections/Team/TeamOne";
import teamOneData from "../data/team/teamOne.json";
import CTAOne from "../components/Sections/CallToAction/CTAOne";
import CTATwo from "../components/Sections/CallToAction/CTATwo";
import { useImperativeHandle, useState } from "react";
import { baseUrl } from "../../config";
import axios from "axios";
import ShopProducts from "../components/Shop/ShopProducts";
import ProductSlider from "../components/Sections/ProductThumb/Elements/ProductSlider";
import { PrevArrow, NextArrow } from "../components/Other/SliderArrow";
import SectionTitleOne from "../components/Sections/SectionTitle/SectionTitleOne";
import Slider from "react-slick";
import Counter from "./homepages/homepage7";
// import BrandsOne from "../components/Sections/Brands/BrandsOne";
import BrandSlideOne from "../components/Sections/BrandSlide/BrandSlideOne";
import ShippingData from "./homepages/homepage8";
import Services from "./homepages/homepage9";
import Rate from "../components/Other/Rate";
import Benefits from "../components/Other/Benefits";

export default function homepage1() {
  console.log(sliderData);

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [banner, setBannner] = useState([]);
  const [brands, setBrands] = useState([]);

  const fetchData = async () => {
    try {
      const url = `${baseUrl}/api/get/all/banners`;
      const res = await axios.get(url, { withCredentials: true });
      setData(res.data);

      const url_pro = `${baseUrl}/api/all/products`;
      const res_pro = await axios.get(url_pro, { withCredentials: true });
      setProduct(res_pro.data.allProducts);

      const url_prime = `${baseUrl}/api/get/all/category`;
      console.log(url_prime);
      const res_prime = await axios.get(url_prime, { withCredentials: true });
      console.log(res_prime);
      setCategory(res_prime.data.all_categories);

      const url_banner = `${baseUrl}/api/get/all/category`;
      const res_banner = await axios.get(url_banner, { withCredentials: true });

      const url_brands = `${baseUrl}/api/get/brand`;
      const res_brand = await axios.get(url_brands, { withCredentials: true });
      setBrands(res_brand.data.findBrands);
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);
  console.log(data);
  console.log(category);
  console.log("main start", brands);

  const settings = {
    speed: 500,
    slidesToShow: 5,
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

  const setting = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "product-slide__wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1170,
        setting: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        setting: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const reviewObj = [
    {
      _id: "1",
      title: "India",
      name: "Mr. Ram Chand",
      url: "https://www.youtube.com/embed/4LzEZYvyJVg",
    },
    {
      _id: "2",
      title: "Australia",
      name: "Mr. Jone",
      url: "https://www.youtube.com/embed/naNyQAn08qo",
    },
    {
      _id: "3",
      title: "London",
      name: "Mis. Scarlett Johansson",
      url: "https://www.youtube.com/embed/62UeowWFW6A",
    },
    {
      _id: "4",
      title: "Dubai",
      name: "Mis. Charlize Theron",
      url: "https://www.youtube.com/embed/5W-QigyVOvI",
    },
    {
      _id: "5",
      title: "North America",
      name: "Mis. Emma Stone",
      url: "https://www.youtube.com/embed/lBzVYI_gTQI",
    },
  ];

  // const brandObj = [
  //   {
  //     _id: "1",
  //     title: "img_1",
  //     url: "/assets/images/brands/BrandsOne/1.png",
  //   },
  //   {
  //     _id: "2",
  //     title: "img_2",
  //     url: "/assets/images/brands/BrandsOne/2.png",
  //   },
  //   {
  //     _id: "3",
  //     title: "img_3",
  //     url: "/assets/images/brands/BrandsOne/3.png",
  //   },
  //   {
  //     _id: "4",
  //     title: "img_4",
  //     url: "/assets/images/brands/BrandsOne/4.png",
  //   },
  //   {
  //     _id: "5",
  //     title: "img_5",
  //     url: "/assets/images/brands/BrandsOne/5.png",
  //   },
  // ];

  return (
    <LayoutOne title="Homepage 1" data={sliderData} className="-style-1">
      <SliderTwo data={data} className="-style-1" showDots />
      <IntroductionOne data={introductionOneData} />
      {/* <IntroductionTwo data={introductionTwoData} />  */}
      <div>
        {/* <ShippingData /> */}
        <Benefits />
        
      </div>
      <div>
      <SectionTitleOne align="center" spaceBottom="20px">
            Our Services
          </SectionTitleOne>
        <Services />
      </div>
      <ProductSlideOne data={category} />

      <div className="container">
        <ShopProducts
          gridColClass="col-12 col-sm-6 col-md-4 col-lg-3"
          listColClass="col-12 col-lg-6"
          view={"grid"}
          data={product.slice(0, 12)}
        />
      </div>

      {/* <BrandSlideOne data={brands} /> */}
      <div className="product-slide brands_homepage_slider">
        <div className="container">
          <SectionTitleOne align="center" spaceBottom="50px">
            Our Brands
          </SectionTitleOne>

          <div className="product-slider">
            <Slider {...settings}>
              {brands?.map((data, index) => (
                <div key={data._id}>
                  <div className="card">
                    <img src={data?.main_category_image?.image_url} width="210" height="200"></img>
                  </div>

                  <div className="title">{data?.main_category_image?.image_name} </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="product-slide video_review_homepage_slider">

      <div>
            <Counter />
          </div> 
        <div className="container">
          

          <SectionTitleOne align="center" spaceBottom="50px">
            Client Reviews
          </SectionTitleOne>

          <div className="product-slider video_reviews_slider">
            <Slider {...setting}>
              {reviewObj.map((data, index) => (
                <div className="video_review_box" key={data._id}>
                  <div className="card">
                    <iframe
                      title={data.title}
                      width="320"
                      height="260"
                      src={data.url}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="name">{data.name}</div>
                  <div className="title country">{data.title}</div>
                  
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <TestimonialOne data={testimonialOneData} />
      {/* <TeamOne data={teamOneData} /> */}
      {/* <CTAOne /> */}
    </LayoutOne>
  );
}
