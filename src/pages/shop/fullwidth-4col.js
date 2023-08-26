import { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";

import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import { getProductbyFilter } from "../../common/productSelect";
import LayoutFour from "../../components/Layout/LayoutOne";
import productData from "../../data/products.json";
import ShopProducts from "../../components/Shop/ShopProducts";
import ShopHeader from "../../components/Shop/ShopHeader";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";

export default function () {
  const pageLimit = 12;
  const [offset, setOffset] = useState(0);
  const [currentView, setCurrentView] = useState();
  const [currentSort, setCurrentSort] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    let sortedProduct = getProductbyFilter(productData, currentSort);
    setCurrentData(sortedProduct.slice(offset, offset + pageLimit));
  }, [offset, currentSort]);
  return (
    <LayoutFour title="Shop Fullwidth 4 columns" container="wide">
      <Breadcrumb title="Shop">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Shop" current />
      </Breadcrumb>
      <div className="shop">
        <div className="container-full-half">
          <ShopHeader
            view={currentView}
            getCurrentSort={setCurrentSort}
            getCurrentView={(view) => setCurrentView(view)}
          />
          <ShopProducts
            gridColClass="col-12 col-sm-6 col-md-4 col-lg-3"
            listColClass="col-12 col-lg-6"
            view={currentView}
            data={currentData}
          />

          <Paginator
            pageContainerClass="paginator"
            totalRecords={productData.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
