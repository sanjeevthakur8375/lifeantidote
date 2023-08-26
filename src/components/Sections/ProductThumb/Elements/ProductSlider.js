import Slider from "react-slick";
import Link from "next/link";

import Product from "../../../Product";

export default function ProductSlider({ data, sliderSettings }) {
  return (
    <div className="product-slider">
      <Slider {...sliderSettings}>
        {data.map((data, index) => (
          <div key={index} className="product-slide__item">
            {/* <Product data={p} /> */}
            <div className={`product `}>
              {/* <div className="product-type">{renderType()}</div> */}
              <div className="product__thumb">
                <Link
                  href={`${process.env.PUBLIC_URL}/shop/category/${data._id}`}
                  // href={`#`}
                  as={`${process.env.PUBLIC_URL}/shop/category/${data._id}`}
                  // as={`#`}
                >
                  <a className="product__thumb__image">
                    {/* {data?.product_images?.map((img, index) => ( */}
                    <img
                      key={index}
                      src={data?.main_category_image?.image_url}
                      alt="Product image"
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "contain",
                      }}
                    />
                    {/* ))} */}{" "}
                    {/* {otherColor && (
                    //   <img src={data?.product_images[0]?.image_url} />
                    // )} */}
                  </a>
                </Link>
                {/* <div className="product__thumb__actions">
              <div className="product-btn" data-tip data-for="cartIcon">
                <Button
                  height="50px"
                  width="50px"
                  color="white"
                  className={`product__actions__item -round ${classNames({
                    "active -disable":
                      checkProductInCart(cartState, data._id) ||
                      data.quantity < 1,
                  })}
                  `}
                  action="#"
                  onClick={addToCartHandle}
                  content={<i className="fas fa-shopping-bag" />}
                ></Button>
              </div>
              <ReactTooltip id="cartIcon" type="dark" effect="solid">
                <span>Add to Cart</span>
              </ReactTooltip>
              <div className="product-btn" data-tip data-for="qvIcon">
                <Button
                  height={50 / 14 + "em"}
                  width={50 / 14 + "em"}
                  color="white"
                  className="product__actions__item -round"
                  action="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowQuickView(true);
                  }}
                  content={<i className="fas fa-eye" />}
                ></Button>
              </div>
              <ReactTooltip id="qvIcon" type="dark" effect="solid">
                <span>Quick view</span>
              </ReactTooltip>
              <div className="product-btn" data-tip data-for="wlIcon">
                <Button
                  height={50 / 14 + "em"}
                  width={50 / 14 + "em"}
                  color="white"
                  className={`product__actions__item -round ${classNames({
                    active: checkProductInWishList(wishlistData, data.id),
                  })}`}
                  action="#"
                  onClick={addToWishlistHandle}
                  content={<i className="fas fa-heart" />}
                ></Button>
              </div>
              <ReactTooltip id="wlIcon" type="dark" effect="solid">
                <span>Add to Wishlist</span>
              </ReactTooltip>
            </div> */}
              </div>
              <div className="product__content">
                <div className="product__content__header">
                  <h5 className="product-category">
                    {data?.main_category_name?.slice(0, 30)}
                    {data?.main_category_name?.length < 30 ? "" : "..."}
                  </h5>
                  {/* <Rate currentRate={process.env.PUBLIC_URL + "/assets/images/med.webp"} /> */}
                </div>
                <Link
                  // href={`${process.env.PUBLIC_URL}/shop/product/[slug]`}
                  href={`#`}
                  // as={`${process.env.PUBLIC_URL}/shop/product/${data.product_slug}`}
                  as={`#`}
                >
                  <a className="product-name">{data.product_name}</a>
                </Link>
                <div className="product__content__footer">
                  {/* <h5 className="product-price--main">
                {data.discount
                  ? formatCurrency(data.product_regular_price)
                  : formatCurrency(data.product_regular_price)}
              </h5> */}
                  {/* {data.discount && (
                <h5 className="product-price--discount">
                  {formatCurrency(data.price)}
                </h5>
              )} */}
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
