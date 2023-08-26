import React from "react";
import Product from "../Product";
import classNames from "classnames";
import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";

export default function ShopProducts(props) {
  const { gridColClass, listColClass, fiveCol, view, data } = props;
  let arr = [5];
  for (var i = 0; i < Math.round(data.length / 5); i++) {
    arr.push(arr[i] + 6);
  }

  console.log(data);
  return (
    <div className="shop-products">
      {view === "grid" ? (
        <div className="shop-products__grid">

        {/* <div className="our_products_heading">Our Products</div> */}
        <SectionTitleOne align="center" spaceBottom="50px">
            Our Products
          </SectionTitleOne>
          {data && (
            <div className="row">
              {data.map((item, index) => {
                if (fiveCol) {
                  if (arr.includes(index)) {
                    return <div key={index} className="w-100"></div>;
                  }
                }
                return (
                  <div
                    key={index}
                    className={classNames(gridColClass, {
                      "five-col": fiveCol,
                    })}
                  >
                
                    <Product data={item} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="shop-products__list">
          {data && (
            <div className="row">
              {data.map((item, index) => (
                <div key={index} className={listColClass}>
                  {/* <Product type={view} data={item} type={"list"} /> */}
                  <Product data={item} type={"list"} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
