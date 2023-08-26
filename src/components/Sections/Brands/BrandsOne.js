import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import Slider from "react-slick";
import Link from "next/link";

export default function BrandsOne({ data, sliderSettings }) {
  return (
    <div className="brand-one">
      {/* <div className="container">
        <div className="brand-one__wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <SectionTitleOne
                spaceBottom="0px"
                description="Discover products with brands"
              >
                Our brands
              </SectionTitleOne>
            </div>
            <div className="col-12 col-md-8">
              <div className="brand-one__logos">
                {Array.from(Array(6), (e, i) => (
                  <div key={i} className="brand-one__logos__item">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/images/brands/BrandsOne/${i + 1}.png`
                      }
                      alt="logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Slider {...sliderSettings}>
        {data.map((data, index) => (
          <div key={index} className="product-slide__item">
            <div className={`product `}>
              <div className="product__thumb">
                <Link
                  href={`${process.env.PUBLIC_URL}/shop/brands/${data._id}`}
                  as={`${process.env.PUBLIC_URL}/shop/brands/${data._id}`}
                >
                  <a className="product__thumb__image">
                    <img
                      key={index}
                      src={data?.main_category_image?.image_url}
                      alt="Brands image"
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Link>
              </div>
              <div className="product__content">
                <div className="product__content__header">
                  <h5 className="product-category">
                    {data?.main_category_name?.slice(0, 30)}
                    {data?.main_category_name?.length < 30 ? "" : "..."}
                  </h5>
                </div>
                <Link href={`#`} as={`#`}>
                  <a className="product-name">
                    {data?.main_category_image?.image_name}
                  </a>
                </Link>
                <div className="product__content__footer">
                  {data.variation && (
                    <div className="product-colors">
                      {data.variation.map((color, index) => (
                        <div
                          key={index}
                          className={`product-colors__item ${classNames({
                            active:
                              otherColor &&
                              otherColor.colorCode === color.colorCode,
                          })}`}
                          style={{ backgroundColor: color.colorCode }}
                          onClick={() => setOtherColor(color)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
